const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    const res = await Product
        .find({
            ative: true,
        });
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            ative: true,
        }, 'title description price slug tags');
    return res;
}

exports.getById = async (id) => {
    const res = await Product
        .findById(id, 'title description price slug tags');
    return res;
}

exports.create = async (data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    });
}

exports.delete = async (id) => {
    await Product.findOneAndRemove(id);
}