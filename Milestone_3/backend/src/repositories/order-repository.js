const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async () => {
    var res = await Order.find({},
        'status')
        .populate('customer', 'name customer')
        .populate('items.product_id', 'title image price amount');
    return res;
}

exports.create = async (data) => {
    var order = new Order(data);
    await order.save();
}

