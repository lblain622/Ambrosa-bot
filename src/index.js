require('dotenv').config({ path: '../.env' });

const { Client, GatewayIntentBits } = require('discord.js');
const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');

// Check for missing environment variables
if (!process.env.MONGO_URI || !process.env.TOKEN) {
    console.log(process.env.TOKEN)
    console.error('Missing required environment variables!');
    process.exit(1);
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ],
});

(async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        eventHandler(client);

        client.login(process.env.TOKEN).catch((err) => {
            console.log(`Error logging in: ${err}`);
        });

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();
