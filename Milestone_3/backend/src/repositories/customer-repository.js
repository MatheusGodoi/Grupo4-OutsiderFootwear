// Customer Repository
// Métodos criados para modularização do código

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async () => {
    let customer = await Customer.find({});

    return customer;
}

exports.getByEmail = async (email) => {
    const res = await Customer
        .findOne({
            email: email,
            ative: true,
        });
    return res;
}

exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save();
}

exports.update = async (id, data) => {
    await Customer.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            email: data.email,
            password: data.password,
            address: data.address,
            phone: data.phone,
            birthday: data.birthday,
            gender: data.gender,
            status: data.status,
        }
    });
}

exports.delete = async (id) => {
    await Customer.findByIdAndDelete(id);
}
