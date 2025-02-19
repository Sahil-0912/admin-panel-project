const SubCat = require('../controller/SubCat.Cantroller')

const router = require('express').Router()
router.post('/', SubCat.store)
router.get('/', SubCat.index)
router.get('/:id', SubCat.trash)
router.post('/:id', SubCat.edit)

module.exports = router