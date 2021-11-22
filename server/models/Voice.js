const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voiceSchema = mongoose.Schema(
    {
        userFrom: {
            type: Schema.Types.ObjectID,
            ref: 'User',
        },
        score: {
            type: Number,
        },
        audioUrl: {
            type: String,
        },
    },
    { timestamps: true }
);

const Voice = mongoose.model('Voice', voiceSchema);
module.exports = { Voice };
