// Schema criado no nosso banco de dados para salvar informações de clientes

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    birthday: {
        type: Date,
    },
    gender: {
        type: String,
    },
    admin: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Customer', schema);