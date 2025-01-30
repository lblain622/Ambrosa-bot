const transactionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, // Reference to the User model
        ref: 'User',
        required: true,
    },
    companyId: {
        type: Schema.Types.ObjectId, // Reference to the Company model
        ref: 'Company',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    shares: {
        type: Number,
        required: true,
    },
    action: {
        type: String,
        enum: ['buy', 'sell'], // Only "buy" or "sell" allowed
        required: true,
    },
});

module.exports = model('Transaction', transactionSchema);
