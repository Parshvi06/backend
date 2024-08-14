const express = require('express');
const Model = require('../models/productModel');

const router = express.Router();

router.post('/add',(req,res)=>{
    console.log(req.body);
    
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        
        res.status(500).json(err);
        
    });


});


router.get('/getall',(req,res)=>{
    res.send('Response from product getall');
});


router.get('/getbycategory/:category',(req,res)=>{
    Model.findOne({category:req.params.category})

    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        
        res.status(500).json(err);
        
    });


});
router.get('/getbyid/:id',(req,res)=>{
    console.log(req.params.id);
    
    res.send('Response from product getbyid');
});

router.get('/update',(req,res)=>{
    res.send('Response from product update');
});

router.get('/delete',(req,res)=>{
    res.send('Response from product delete');
});

module.exports = router;