const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quoteAPI = require('./apis/quoteAPI');
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/quotes-db').
    then(()=> console.log('CONNECTED TO DB')).
    catch((err)=> console.log("error"));

// MIDDLEWARE
app.use(cors());
app.use(express.json());


// SEED DB
seedDB();

app.get('/', (req, res) => {
    res.send('Connected');
})

// API
app.use(quoteAPI);

app.listen(8000 , ()=>{
    console.log("CONNECTED TO LOCALHOST 8000");
})