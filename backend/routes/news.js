const {Router} = require('express');
const router = Router();
const News = require('../models/News');

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

async function getNews(req, res, next) {
    let news;
    try {
      news = await News.findById(req.params.id);
      if (news == null) {
        return res.status(404).json({ message: "Не найдено" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.news = news;
    next();
}


router.get("/news", async (req,res) => {
    try{
        const news = await News.find({});
        res.json(news);
    }catch(err){
        res.status(500).json({message: e.message});
    }
})

router.get("/news/:id", getNews, async (req,res)=>{
    res.json(res.news);
})

router.post("/news", async (req,res)=>{
    const news = new News({
        heading: req.body.heading,
        text: req.body.text,
        date: req.body.date,
        time: req.body.date,
        image: req.body.image
    });

    try{
        await news.save();
        res.status(201).json({news});
    }catch(e){
        res.status(400).json({message: e.message});
    }
})

module.exports = router;