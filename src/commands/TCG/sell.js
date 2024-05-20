const { callback } = require("../misc/ping");

module.exports = {
    name:'sell',
    description:'Sell a card to the shop',
    opttions:[
        {
            name:'card',
            description:'The card you want to sell',
            type:3,
            required:true,
        }
    ],
    callback: (client,interaction) => {
        interaction.reply('This command is still in development');
    }
};