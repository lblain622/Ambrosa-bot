const { Client,Interaction } = require("discord.js");
const User = require('../../model/User');


module.exports={
    name:'daily',
    description:'Claim your daily reward',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    callback: async (client,interaction) => {
        if(!interaction.inGuild()){
            return interaction.reply({content: 'This command can only be used in a server',ephemeral:true});
        }

        try{
            await interaction.deferReply();
            let query = {userId: interaction.user.id};

            let user = await User.findOne(query);
            if (user){
                const lastdailydate = user.lastDaily.toDateString();
                const today = new Date().toDateString();
                if(lastdailydate === today){
                    interaction.editReply('You have already claimed your daily reward today');
                    return;

                    }else{
                        user= new User({
                            ...query,
                            balance: user.balance + 10,
                            lastDaily: new Date(),
                        });
                    await user.save();
                    interaction.editReply('You have claimed your daily reward of $10 ');
                    }
            }
        }catch(err){
            console.log(err)
           
        }
    }
}