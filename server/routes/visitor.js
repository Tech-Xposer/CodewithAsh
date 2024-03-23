
const express = require('express')
const {contactHandler} = require('../controllers/visitorController')

const router = express.Router()

router.post('/contact', contactHandler)

module.exports = router