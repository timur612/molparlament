const {Router} = require('express');
const router = Router();
const Banner = require('../models/Banner');
const multer = require('multer');
var fs = require('fs');
var path = require('path');


// загрузка изображений
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
const upload = multer({ storage: storage });




router.get("/banner/:id", async(req,res) => {
    try{
        const banner = await Banner.findOne({ _id: req.params.id });
        res.json(banner.image1)
        // res.render('imagesPage', { items: banner.image1 });
    }catch(e){
        res.status(404).json({message: e.message});
    }
    // Banner.find({}, (err, items) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(500).send('An error occurred', err);
    //     }
    //     else {
    //         res.render('imagesPage', { items: items });
    //         // res.json(items);
    //     }
    // });
})

router.post("/banner1", upload.single('image'), async(req,res, next)=>{
    const obj = {
        image1: {
            data: fs.readFileSync(path.join(__dirname, '../uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
    }
    Banner.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            res.json('success');
        }
    });
})
router.post("/banner2", upload.single('image'), async(req,res, next)=>{
    const obj = {

        image2: {
            data: fs.readFileSync(path.join(__dirname,'../uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
    }
    Banner.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            res.json('success');
        }
    });
})
router.post("/banner3", upload.single('image'), async(req,res, next)=>{
    const obj = {
   
        image3: {
            data: fs.readFileSync(path.join(__dirname, '../uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    Banner.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            res.json('success');
        }
    });
})

router.patch("/banner/:id",upload.single('image'), async (req,res)=>{
    try{
        const banner = await Banner.findOne({ _id: req.params.id });

		banner.image1 = {
            data: fs.readFileSync(path.join(__dirname, '../uploads/' + req.file.filename)),
            contentType: 'image/png'
        };

        await banner.save();
        res.send(banner)
    }catch(e){
        res.status(404).json({message: e.message});
    }
    
})



module.exports = router