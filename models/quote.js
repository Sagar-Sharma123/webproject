const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    author : {
        type:String,
        trim: true
    },
    text : {
        type : String,
        trim : true
    }
})

module.exports = mongoose.model('Quote' , quoteSchema);