const multer = require('multer')
const ErrorHandling = require('../model/ErrorHandling');
const {v4: uuidv4} = require('uuid');
const validMimeType = {
    "image/jpeg": 'jpeg',
    "image/jpg": 'jpg', 
    "image/png": 'png'
}
const fileStorage = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null, 'uploads/images')
    }, 

    filename: (req,file,cb) => {
        const ext = validMimeType[file.mimetype];
        cb(null, uuidv4() + "." +ext)
    }
})
const fileUpload = multer({
    storage: fileStorage,
    limits: 5000*1000,
    fileFilter: (req, file, cb) => {
        const isValid = !!validMimeType[file.mimetype];
        let error = isValid ? null : new Error('Uh, oh. You can only upload *.png, *.jpeg or *.jpg files')
        cb(error, isValid);
    }
})

module.exports = fileUpload;