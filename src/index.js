require('dotenv').config();
const {Client,GatewayIntentBits} = require('discord.js');

const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');


const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ],
  
});

(async () => {
    try{
        mongoose.set('strictQuery',false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    eventHandler(client);
    
    client.login(process.env.TOKEN).catch((err) => {
        console.log(`Error logging in: ${err}`);
       });
    
    }catch(error){
        console.log(error);
        process.exit(1);
    }

})();





