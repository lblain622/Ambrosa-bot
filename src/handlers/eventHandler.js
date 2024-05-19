const getAllFiles = require('../utils/getAllFiles');
const path = require('path');
module.exports = (client) =>{
    const eventFolder = getAllFiles(path.join(__dirname,'..','/events'),true);

    for (const event of eventFolder){
        const eventFile = getAllFiles(event);
        eventFile.sort((a,b) => a >b);
        const eventName = event.replace(/\\/g,'/').split('/').pop();
        

        client.on(eventName, async (args) =>{
            for (const file of eventFile){
                const eventFunction = require(file);
                await eventFunction(client,args);
            }
        });
    }
};