const express = require('express');
const mongoose = require('mongoose');
const newsRoutes = require('./routes/news.js');
const bannersRoutes = require('./routes/banners.js');
// const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');



const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = 'mongodb+srv://timur:AqBxOZGRtFIoA7l8@cluster0.2k1uk.mongodb.net/molparl?retryWrites=true&w=majority';

app.use(newsRoutes);
app.use(bannersRoutes);

async function start(){
    try{
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, ()=>{
            console.log('Server has been started on '+PORT)
        })
    }catch(e){
        console.log(e)
    }
}

start()