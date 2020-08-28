const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    product: {
        type:Schema.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    quantity:{
        type: Number,
        maxlength: 1,
        default: 1
    }
}, { timestamps: true })

cartSchema.pre(/^find/, function(next){
    this.populate('Product');
    next()
})
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;