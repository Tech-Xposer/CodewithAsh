const express = require('express')
const {createBlog, getBlogs, getBlogsByUser,getBlogByID} = require('../controllers/blogsController')
const { restrict, restrictTo } = require('../middlewares/auth')
const { upload } = require('../services/multer')
const router = express.Router()

router.post('/newblog',restrict,restrictTo('admin'),upload.single('imageUrl'), createBlog)

router.get('/', getBlogs)
router.get('/:_id',getBlogByID)
router.get('/blogsbyuser',restrict, getBlogsByUser)

module.exports = router

// 14,1 5, 19 March
// Timing: 11 am - 2 pm or 4 pm - 6 pm
