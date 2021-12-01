const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    costumer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    number: {
        type: String,
        require: true
    },
    createDate: {
        type: Date,
        require: true,
        default: Date.now,
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    items: [{
        quantity: {
            type: Number,
            require: true,
            deafault: 1
        },
        price: {
            type: Number,
            require: true,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
    }]
});

module.exports = mongoose.model('Order', schema);