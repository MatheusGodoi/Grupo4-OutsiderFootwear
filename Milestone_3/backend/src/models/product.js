// Schema criado no nosso banco de dados para salvar informações de produtos

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
        trim: true,
        index: true,
        unique: true
    },
    image: {
        type: String,
        default: "https://raw.githubusercontent.com/MatheusGodoi/Grupo4-OutsiderFootwear/main/Milestone_2/outsider-footwear/src/assets/jsondb/placeholder-image.png?raw=true",
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