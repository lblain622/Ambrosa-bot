const {Client, Message} = require('discord.js');
const Levels = require('../../model/Levels');
const calculateXp = require('../../utils/calculateLevelXp');
function getRandXp(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1)) + min;
}

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 */
module.exports = async (client,message)=>{
    console.log('Message event fired');
    if(!message.inGuild() || message.author.bot) return;

    const genXp = getRandXp(15,25);
    
    const query = {
        userId:message.author.id,
        guildId:message.guild.id,
    };

    try{
        const lvl = await Levels.findOne(query);
        if(lvl){
            console.log('Updating level');
            lvl.xp += genXp;
            if(lvl.xp > calculateXp(lvl.level)){
                lvl.level += 1;
                lvl.xp = 0;
                message.reply(`Congrats! You are now level ${lvl.level}`);
            }
        await lvl.save().catch((error)=>{
                console.log(`Could not save level: ${error}`)
            return;
        });
        }else{
            console.log('Creating new level');
            const newLevel = new Levels({
                userId:message.author.id,
                guildId:message.guild.id,
                xp:genXp,
            });
            await newLevel.save().catch((error)=>{
                console.log(`Could not save level: ${error}`);
                return;
            });
        }
    }catch(error){
        console.log(error);
    }



};