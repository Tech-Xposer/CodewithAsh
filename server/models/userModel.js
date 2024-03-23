const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { randomBytes, createHmac } = require('crypto')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
}, { timestamps: true })


userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return
    const salt = randomBytes(16).toString('base64')
    const hashedPassword = createHmac('sha256', salt).update(user.password).digest('hex');
    this.salt = salt
    this.password = hashedPassword;
    next()
})

userSchema.static('matchUserPassword', function (user, password) {
    const hashedPassword = createHmac('sha256', user.salt).update(password).digest('hex');
    return hashedPassword === user.password
})

module.exports = mongoose.model('user', userSchema)