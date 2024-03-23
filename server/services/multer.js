const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage(
    {
    
    destination: function (req, file, cb) {
        const {uid}= req.user;
        const path = `./public/uploads/${uid}`
        fs.mkdirSync(path, { recursive: true })
        cb(null,  path)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage: storage })

module.exports = {upload}
