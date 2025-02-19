const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    sub_cat: {
        type: Schema.Types.ObjectId,
        ref: 'subcat'
    },
    product_name: {
        type: String,
    },
    product_price: {
        type: String,
    },
    product_img: {
        type: String
    }
})

const Product = model('product', ProductSchema)
module.exports = Product