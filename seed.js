const mongoose = require('mongoose');
const Quote = require('./models/quote');

const dummy = [
    {
        author : 'sagar',
        text : 'gaddi tera bhai chalyga'
    },
    {
        author : 'sam',
        text : 'hello world'
    },
    {
        author : 'sagar',
        text : 'gaddi tera bhai chalyga'
    },
    {
        author : 'sam',
        text : 'hello everyone'
    },
    {
        author : 'GARY',
        text : 'gaddi tera bhai chalyga'
    }
]

async function seedDB(){
    await Quote.insertMany(dummy);
    console.log('DB SEEDED');
}

module.exports = seedDB;