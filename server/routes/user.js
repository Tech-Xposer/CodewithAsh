const {createUser, verifyUser, loginUser, handleLogout, fetchUser} = require('../controllers/userController')
const express = require('express')
const { restrict } = require('../middlewares/auth')
const router  = express.Router()

router.post('/register', createUser)
router.get('/verify/:_id/:token', verifyUser)

router.post('/login',loginUser)
router.get('/getuser', restrict , fetchUser)
router.get('/logout', handleLogout)

module.exports = router