module.exports = async (client,guildId) => {
    let appplicationCommands;
    if(guildId){
    const guild = await client.guilds.fetch(guildId);
    appplicationCommands = guild.commands;
    }else{
        appplicationCommands = await client.application.commands;
    }
    await appplicationCommands.fetch();
    return appplicationCommands;

};