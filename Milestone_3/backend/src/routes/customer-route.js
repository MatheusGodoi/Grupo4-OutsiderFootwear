const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller')

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/:email', controller.getByEmail);

module.exports = router;