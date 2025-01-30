const companySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    sector: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    priceHistory: {
        type: [Number], // Array to track historical prices
        default: [],
    },
    news: {
        type: [
            {
                headline: String,
                sentiment: Number, // Sentiment score (-1 to +1)
                date: { type: Date, default: Date.now },
            },
        ],
        default: [],
    },
});

module.exports = model('Company', companySchema);
