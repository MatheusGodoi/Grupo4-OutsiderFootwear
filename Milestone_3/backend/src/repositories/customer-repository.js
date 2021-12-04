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


