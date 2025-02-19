const { default: mongoose } = require("mongoose")

exports.dbconnect = () => {
    mongoose.connect('mongodb://localhost:27017/admin-panel ')
    .then(() => { console.log("db connected 👍") })
    .catch((err) => { console.log(err) })
}