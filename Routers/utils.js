const multer = require('multer')
const router = require("express").Router()

// storage 
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./static/uploads")
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
})

const myStorage = multer({ storage: storage })


router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
    const fileName = req.file.filename;
    res.status(200).json({ message: "Successfully Uploaded", fileName: fileName });
});






module.exports = router