const express = require('express')
const { getMessages, getMessage, deleteMessage } = require('../controllers/adminController')

// Admin Router
const router = express.Router()

router.get('/messages', getMessages)
router.route('/message/_id').get(getMessage).delete(deleteMessage)
module.exports = router