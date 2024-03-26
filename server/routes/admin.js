const express = require('express')
const { getMessages, getMessage, deleteMessage, deleteBlog } = require('../controllers/adminController')
const {getBlogs} = require('../controllers/blogsController')

// Admin Router
const router = express.Router()

router.get('/messages', getMessages)
router.route('/message/:_id').get(getMessage).delete(deleteMessage)
router.route('/blog/:_id').get(getBlogs).delete(deleteBlog)
module.exports = router