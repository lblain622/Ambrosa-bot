const newsSchema = new Schema({
    companyId: {
        type: Schema.Types.ObjectId, // Reference to the Company model
        ref: 'Company',
        required: false, // Can be global news, not tied to a specific company
    },
    headline: {
        type: String,
        required: true,
    },
    sentiment: {
        type: Number, // Sentiment score (-1 for bad, 0 for neutral, +1 for good)
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('News', newsSchema);
