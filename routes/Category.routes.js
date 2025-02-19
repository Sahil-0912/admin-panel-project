const Category = require('../controller/Category.controller')

const router = require('express').Router()
router.post('/', Category.Store)
router.get('/:id', Category.trash)
router.post('/:id', Category.edit)


module.exports = router