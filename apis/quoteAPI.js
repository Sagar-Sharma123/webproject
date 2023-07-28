const router = require('express').Router();
const Quote = require('../models/quote');

router.get('/all' , async(req,res)=>{
    try{
        const allQuote = await Quote.find({});
        // console.log(allQuote);
        res.status(200).json(allQuote);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.post('/new' , async(req,res)=>{
    const {author , text} = req.body;
    await Quote.create({author , text});
    res.status(200).json({msg : 'new quote created successfully!!!!!!'});
})

module.exports = router;