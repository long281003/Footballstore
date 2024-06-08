const express = require('express')
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/image')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '10000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF/
        const mimeTypes = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))
        if (mimeTypes && extname) {
            return cb(null, true)
        }
        cb('Give proper file formate to upload ')
    }
})

module.exports = upload