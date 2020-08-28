const express = require('express');
const productController = require('./../controllers/productController')
const router = express.Router();

router
  .route('/')
  .get(productController.getAllProducts);

router
  .route('/:id')
  .get(productController.getOneProduct)
  .post(productController.createProduct)
  .patch(productController.updateProduct)

router
  .route('/image/:id')
  .patch(productController.uploadImage)

module.exports = router;
