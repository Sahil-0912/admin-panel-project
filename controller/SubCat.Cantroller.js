const SubCat = require("../model/SubCat.Model")

exports.store = async (req, res) => {
    // console.log(req.body);
    try {
        const { category, sub_cat } = req.body
        const subcat = await SubCat.create({ category, sub_cat })
        // res.json("inserted.....")
        res.redirect('/ViewSubCategory')
    } catch (error) {
        console.log(error);

    }
}

exports.index = async (req, res) => {
    try {
        const subcat = await SubCat.find().populate('category')
        res.json({
            subcat
        })
    } catch (error) {
        console.log(error);

    }
}
exports.trash = async (req, res) => {
    try {
        const { id } = req.params
        await SubCat.findByIdAndDelete(id)
        // res.json("deleted............")
        res.redirect('/ViewSubCategory')
    } catch (error) {
        res.json(error)
    }
}


exports.edit = async (req, res) => {
    try {
        const { id } = req.params
        console.log("id..",id);
        
        const { category, sub_cat } = req.body
        await SubCat.findByIdAndUpdate(
            {
                _id: id
            },
            {
                category, sub_cat
            }
        )
        res.redirect('/ViewSubCategory')
    } catch (error) {
        res.json(error)
    }
}