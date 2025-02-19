const { Schema, model } = require("mongoose");


const Common = {
    type: String,
    required: true,
    unique: true,
    trim: true
}
const adminschema = new Schema({
    username: Common,
    email: Common,
    password: {
        ...Common,
        unique: false
    },
    admin_profile: {
        type: String
    },
    token: {
        type: String
    }
}, {
    timestamps: true
})

const admin = model('Admin', adminschema)
module.exports = admin