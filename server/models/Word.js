const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = mongoose.Schema({
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
    variety_cmt: {
        type: String,
    },
    sentcount_cmt: {
        type: String,
    },
    sentcount_img: Buffer,
    keywords_cmt: {
        type: String,
    },
    keywords_img: Buffer,
    top3_keywords: {
        type: String,
    },
    stopwords_cmt: {
        type: String,
    },
    stopwords_img: Buffer,
    top3_stopwords: {
        type: String,
    },
    countwords_cmt: {
        type: String,
    },
    countwords_img: Buffer,
    top3_countwords: {
        type: String,
    },
    keywords_cmt_c: {
        type: String,
    },
    stopwords_cmt_c: {
        type: String,
    },
    countwords_cmt_c: {
        type: String,
    }
});

const Word = mongoose.model('Words', wordSchema);
module.exports = { Word };
