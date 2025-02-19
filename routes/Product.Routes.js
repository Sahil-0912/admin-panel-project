const productcontorller = require('../controller/Product.Controller')
const upload = require('../middleware/upload.file')

const router = require('express').Router()
router.post('/', upload.single('product_img'), productcontorller.store)
router.get('/:id', productcontorller.trash)
router.post('/:id', upload.single('product_img'), productcontorller.edit)
module.exports = router