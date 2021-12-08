// Schema criado no nosso banco de dados para salvar as compras feitas por cada cliente

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
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
        },
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }]
});

module.exports = mongoose.model('Order', schema);