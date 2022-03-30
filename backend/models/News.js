const {Schema, model} = require('mongoose');

const News = new Schema({
    heading:{
        type: String,
        require: true
    },
    text:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    time:{
        type: String,
        require: true
    },
    image:{
        data: Buffer,
        contentType: String,
    },
});

module.exports = model('news', News);