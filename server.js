const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5000


const Category = require('./routes/Category.routes')
const view = require('./routes/view.routes')
const adminrouter = require('./routes/admin.router')
const subcatrouter = require('./routes/SubCat.Route')
const productrouter = require('./routes/Product.Routes')

const cookieParser = require('cookie-parser')
const flash = require('express-flash')
const session = require('express-session')




app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
// app.use('/public', express.static('uploads'))


app.use(express.static('public'))
app.use('/public',express.static('uploads/product'))
app.use('/public',express.static('uploads/admin'))

app.use(cookieParser())
app.use(session(
    {
        secret: "my secret key",
        resave: false,
        saveUninitialized: true
    }
))
app.use(flash())


app.use('/api/category', Category)
app.use('/api/admin', adminrouter)
app.use('/api/subcategory', subcatrouter)
app.use('/api/product', productrouter)
app.use('/', view)
require('./config/db').dbconnect()




// mongoose.connect('mongodb+srv://sahil123:sahil123@sahil.eumlk.mongodb.net/rnw')


app.listen(PORT, () => console.log(`Example app listening on PORT http://localhost:${PORT}`))