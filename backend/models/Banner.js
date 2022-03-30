const {Schema, model} = require('mongoose');

const Banner = new Schema({
    image1:{
        data: Buffer,
        contentType: String,
    },
    image2:{
        data: Buffer,
        contentType: String,
    },
    image3:{
        data: Buffer,
        contentType: String,
    },
});

module.exports = model('banner', Banner);