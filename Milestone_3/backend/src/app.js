const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('');

const Product = require('./models/product')
const Costumer = require('./models/customer')
const Order = require('./models/order')
// Import routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
