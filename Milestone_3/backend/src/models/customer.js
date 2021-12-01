const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    birthday: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Customer', schema);