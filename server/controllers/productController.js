const Product = require('./../models/productModel');
const factory = require('./handlerFactory');
const imageHandler = require('./imageHandler');

exports.getAllProducts = factory.getAll(Product);
exports.getOneProduct = factory.getOne(Product);
exports.createProduct = factory.createOne(Product);
exports.updateProduct = factory.updateOne(Product);
exports.uploadImage = imageHandler.uploadPhotoById(Product);
exports.deleteProduct = factory.deleteOne(Product);

