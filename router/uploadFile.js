import express from 'express';
import multer from "multer";
import fs from 'fs';

const imageRouter = express.Router();

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const path = `public/uploads`;
    fs.mkdirSync(path, { recursive: true })
    callback(null,path)
},
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  },
  
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}

let upload = multer({ storage: storage,
    fileFilter: fileFilter,
    limits : {fileSize : 2 * 1024 * 1024},
    }).single("image");
 
//* Upload image file post route
imageRouter.post('/uploadImage', upload, (req,res,next)=> {
    if(!req.file){
        res.status("404").json({"status code":"204","message":"Please select an image to upload"})
    }
    res.json(req.file);
})

module.exports = imageRouter;