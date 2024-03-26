const multer = require('multer')
const fs = require('fs');
const storage = multer.diskStorage(
    {
    
    destination: function (req, file, cb) {
        const {_id}= req.user;
        const path = `./public/uploads/${_id}`
        fs.mkdirSync(path, { recursive: true })
        cb(null,  path)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage: storage })

module.exports = {upload}
