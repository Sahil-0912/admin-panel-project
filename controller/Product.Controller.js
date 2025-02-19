const Product = require("../model/Product.model")

exports.store = async (req, res) => {
  console.log(req.body);
  try {
    const { category, sub_cat, product_name, product_price } = req.body
    await Product.create({ category, sub_cat, product_name, product_price, product_img: req.file.filename })
    res.redirect('/ViewProduct')
  } catch (error) {
    console.log(error);
  }
}



exports.trash = async (req, res) => {
  try {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    // res.json("deleted............")
    res.redirect('/ViewProduct')
  } catch (error) {
    res.json(error)
  }
}

exports.edit = async (req, res) => {
  try {
    const { id } = req.params
    console.log("id..", id);

    const { category, sub_cat, product_name, product_price } = req.body
    await Product.findByIdAndUpdate(
      {
        _id: id
      },
      {
        category, sub_cat, product_name, product_price, product_img: req.file.filename
      }
    )
    res.redirect('/ViewProduct')
  } catch (error) {
    res.json(error)
  }
}