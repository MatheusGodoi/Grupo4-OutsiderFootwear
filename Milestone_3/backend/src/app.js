const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.cjgxw.mongodb.net/outsider-db');

const Product = require('./models/product')
const Costumer = require('./models/customer')
const Order = require('./models/order')
// Import routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;
