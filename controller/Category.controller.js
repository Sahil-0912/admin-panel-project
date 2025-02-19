const Category = require('../model/Category.model')

exports.Store = async (req, res) => {
    //    console.log("store api");

    try {
        const { cat_name } = req.body

        const existcat = await Category.findOne({ cat_name }).countDocuments()
        if (existcat > 0) {
            res.json({
                success: true,
                message: "Category is allready exist..."
            })
        } else {
            const category = await Category.create({ cat_name })
            // res.json({
            //     success: true,
            //     message: "inserted..."
            // })
            // req.flash("info", "Category inserted successfully..!")
            res.redirect('/ViewCategory')
        }
    } catch (error) {
        console.log(error);

    }

}


exports.trash = async (req, res) => {
    try {
        const { id } = req.params
        await Category.findByIdAndDelete(id)
        // res.json("deleted............")
        res.redirect('/ViewCategory')
    } catch (error) {
        res.json(error)
    }
}

exports.edit = async (req, res) => {
    try {
        const { id } = req.params
        await Category.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                cat_name: req.body.cat_name
            }
        )
        res.redirect('/ViewCategory')
    } catch (error) {
        console.log(error);
    }
}