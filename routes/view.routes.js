const router = require('express').Router()
const Category = require('../model/Category.model')
const CategoryModel = require('../model/Category.model')
const Product = require('../model/Product.model')
const SubCat = require('../model/SubCat.Model')
const adminmodel = require('../model/admin.model')
const { matchLogin } = require('../utils/loginmiddleware')


router.get('/', (req, res) => {
    // res.render('pages/index')
    matchLogin(req, res, 'Pages/index')
})
router.get('/AddCategory', (req, res) => {
    // res.render('Pages/AddCategory', {
    //     title: "AddCategory"
    // })
    matchLogin(req, res, 'Pages/AddCategory')

})

router.get('/Viewcategory', async (req, res) => {
    const Category = await CategoryModel.find()
    res.render('Pages/Viewcategory',
        {
            Category,
            title: 'ViewCategory'
        },

    )
})

router.get('/UpdateCategory', async (req, res) => {
    const { id } = req.query
    console.log("id", id);
    const Category = await CategoryModel.findById(id)
    res.render('Pages/UpdateCategory',
        {
            Category,
            title: 'UpdateCategory'

        })

})

router.get('/login', async (req, res) => {
    res.render('Pages/login', { message: req.flash('info') })
})

router.get('/register', async (req, res) => {
    res.render('Pages/register', { message: req.flash('info') })
})

router.get('/logout', (req, res) => {
    res.clearCookie('admin')
    res.redirect('/login')
})

router.get('/MyProfile', async (req, res) => {
    const cookiedata = req.cookies.admin
    const email = cookiedata.email
    const singleadmin = await adminmodel.findOne({ email })
    console.log(singleadmin);

    res.render('Pages/MyProfile', { admin: singleadmin })
})

router.get('/ChangePassword', async (req, res) => {
    const email = req.cookies.admin.email
    // console.log(email); 
    res.render('Pages/ChangePassword', { email, message: req.flash('info') })
})

router.get('/updatepassword', async (req, res) => {
    res.render('Pages/updatepassword', { message: req.flash("info") })
})



router.get('/AddSubCategory', async (req, res) => {
    const categories = await Category.find()
    res.render('Pages/AddSubCategory', { categories })
})


router.get('/ViewSubCategory', async (req, res) => {
    const subcategories = await SubCat.find().populate('category')
    res.render('Pages/ViewSubCategory', { subcategories })
})


router.get('/UpdateSubCategory', async (req, res) => {
    const { id } = req.query
    const categories = await Category.find()
    const subcategories = await SubCat.findById(id).populate('category')
    res.render('Pages/UpdateSubCategory', { categories, subcategories })
})

// product

router.get('/AddProduct', async (req, res) => {
    const categories = await Category.find()
    const { cat_id } = req.query;
    var subcategories;
    var selectcategory = req.query.cat_id || ""

    if (cat_id) {
        subcategories = await SubCat.find({ category: cat_id })
    }

    res.render('Pages/AddProduct', { categories, subcategories, selectcategory })
})

router.get('/ViewProduct', async (req, res) => {
    const categories = await Category.find()
    const subcategories = await SubCat.find()
    const product = await Product.find().populate('category').populate('sub_cat')
    res.render('Pages/ViewProduct', { product, categories, subcategories })
})

router.get('/UpdateProduct', async (req, res) => {


    const { id, cat_id } = req.query;

    const categories = await Category.find();
    const SingleProduct = await Product
        .findOne({ _id: id })
        .populate("category")
        .populate("sub_cat");

    let subCategories;
    if (cat_id) {
        subCategories = await SubCat.find({ category: cat_id });
    } else {
        subCategories = await SubCat.find({ category: SingleProduct.category?._id });
    }

    const selectCat = cat_id || SingleProduct.category?._id.toString();

    res.render("pages/updateProduct", {
        categories,
        subCategories,
        SingleProduct,
        selectCat,
    });

})

module.exports = router 