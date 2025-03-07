const { default: mongoose } = require("mongoose")

exports.dbconnect = () => {
    mongoose.connect('mongodb+srv://sahil123:sahil123@sahil.eumlk.mongodb.net/admin-panel ')
    .then(() => { console.log("db connected 👍") })
    .catch((err) => { console.log(err) })
}