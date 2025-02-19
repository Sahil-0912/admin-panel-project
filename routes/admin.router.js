const router = require('express').Router()

const sendemail = require('../config/mail')
const AdminController = require('../controller/Admin.controller')
const upload = require('../middleware/upload.file')
router.post('/register', AdminController.register)
router.post('/login', AdminController.login)
router.post('/updateprofile', upload.single('admin_profile'), AdminController.updateprofile)
router.post('/changepassword', AdminController.changepassowrd)
router.post('/forgetpassword',AdminController.forgetpassword)
router.post('/updatepassword',AdminController.updatepassword)


// router.get('/sendemail' ,async (req,res) => {
//     await sendemail('sahilvaghela.21.imca@iict.indusuni.ac.in',"send email text")
// })



module.exports = router