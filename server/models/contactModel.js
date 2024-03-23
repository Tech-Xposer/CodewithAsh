const mongoose = require('mongoose')
const date = new Date()
const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    subject:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: date.toLocaleDateString()
    }
})

module.exports = mongoose.model('contact', contactSchema)