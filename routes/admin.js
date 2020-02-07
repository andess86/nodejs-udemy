const express = require('express');
const path = require('path');

const adminController = require('../controllers/admin');
const router = express.Router();


// Reached under /admin/
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

module.exports = router;
