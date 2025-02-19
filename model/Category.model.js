const { Schema, model } = require("mongoose");

const Categoryschema = new Schema({
    cat_name:{
        type:String,
        required:true,
        uniuqe:true,
        trim:true
    }
})

const Category = model('Category',Categoryschema)
module.exports = Category