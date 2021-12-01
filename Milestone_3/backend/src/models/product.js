const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        message: 'O slug é obrigatório',
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
    }
});

module.exports = mongoose.model('Product', schema);