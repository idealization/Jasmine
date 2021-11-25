const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voiceSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectID,
        ref: 'User',
    },
    createdAt: {
        type: String,
    },
    score: {
        type: Number,
        default: 0,
    },
    slient_cmt: {
        type: String,
    },
    speaktime_img: Buffer,
    quiettime_img: Buffer,
    tempo_cmt: {
        type: String,
    },
    tempo_img: Buffer,
    volume_cmt: {
        type: String,
    },
    volume_img: Buffer,
    slient_cmt_c: {
        type: String,
    },
    tempo_cmt_c: {
        type: String,
    },
    volume_cmt_c: {
        type: String,
    },
});

const Voice = mongoose.model('Voice', voiceSchema);
module.exports = { Voice };
