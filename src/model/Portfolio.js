const portfolioSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, // Reference to the User model
        ref: 'User',
        required: true,
    },
    holdings: [
        {
            companyId: {
                type: Schema.Types.ObjectId, // Reference to the Company model
                ref: 'Company',
                required: true,
            },
            shares: {
                type: Number,
                required: true,
                default: 0,
            },
        },
    ],
});

module.exports = model('Portfolio', portfolioSchema);
