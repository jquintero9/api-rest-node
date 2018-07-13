const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

router.get('/product', ProductController.getAll);
router.post('/product', ProductController.add);

module.exports = router;

