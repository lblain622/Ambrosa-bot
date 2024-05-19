require('dotenv').config();
const {REST,Routes} = require('discord.js');

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!'
    },
    {
        name: 'beep',
        description: 'Replies with Boop!'
    },
    {
        name: 'work',
        description: 'Get money by working'
    },
    {
        name: 'balance',
        description: 'Check your balance'
    },

];

const rest = new REST({version:'10'}).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log('Started refreshing application (/) commands.');
        await rest.put(
            
            Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID),
            {body:commands},
        );
        console.log('Successfully reloaded application (/) commands.');
    }catch(error){
        console.log(error);
    }
})(); // Add parentheses and call the async function immediately
