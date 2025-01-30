const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 10000, // Initial balance
    },
    lastDaily:{
        type: Date,
        default: 0,
    },
    levelId: {
        type: Schema.Types.ObjectId, // Reference to the Levels model
        ref: 'Levels',
    },
    transactionHistory: {
        type: [Schema.Types.ObjectId], // Array of Transaction references
        ref: 'Transaction',
        default: [],
    },
});

module.exports = model('User', userSchema);
    
