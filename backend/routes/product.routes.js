const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

router.get('/product', ProductController.getAll);
router.get('/product/:id', ProductController.get);
router.post('/product', ProductController.add);
router.delete('/product/:id', ProductController.delete);

module.exports = router;

