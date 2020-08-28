const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    creator: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    tag: {
        type: String
    },
    name:{
        type: String,
        maxlength: 60,
        required: [true, 'Name is required']
    },
    price:{
        type: Number,
        required: [true, 'Price is required']
    },
    vegan:{
        type: String,
        default: 'true',
        required: [true, 'Vegan type is required']
    },
    brand:{
        type: String,
        maxlength: 60,
        required: [true, 'Brand is required']
    },
    category:{
        type: String,
        maxlength: 30,
        required: [true, 'Category is required']
    },
    image1:{
        type: String,
    },
    image2: {
        type:String
    },
    image3: {
        type:String
    },
    amount:{
        type: String,
        maxlength: 60,
    },
    flavour:{
        type: String,
        maxlength: 70
    },
    description:{
        type: String,
        maxlength: 600
    },
    nutrition:{
        type: String,
        maxlength: 500
    },
    discount:{
        type: Number,
        default: 0
    },
    coupon:{
        type: String
    },
    published:{
        type: String,
        default: 'false',
        select: false
    },
    createdOn:{
        type: Number,
        default: Date.now()
    },
    keywords:{
        type: String
    },
    metaDescription:{
        type: String
    }
}, { timestamps: true })


const Product = mongoose.model('Product', productSchema);

module.exports = Product