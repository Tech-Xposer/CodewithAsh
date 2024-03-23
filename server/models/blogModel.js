const mongoose = require('mongoose')
const date = new Date()
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
        minlength: [5, 'Title must be at least 5 characters long'] 
    },
    content:{
        type:String,
        required: true
    },
    permalink:{
        type:String,
        required: true
    },
    metadescription:{
        type:String,
        required: true
    },
    imageUrl:{
        type:String
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date:{
        type:Date,
        default: date.toLocaleDateString()
    }
})
module.exports = mongoose.model('blog', blogSchema)