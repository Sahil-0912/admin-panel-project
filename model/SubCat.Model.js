const { Schema, model } = require("mongoose");

const subCatschema = new Schema({
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    sub_cat:{
        type:String,
        required:true,
        trim:true
    }
})

const SubCat = model('subcat',subCatschema)
module.exports = SubCat