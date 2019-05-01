const express = require('express');
const router = express.Router();
const Product = require('../models/Product')




//Get all product
router.get('/all',(req,res,next)=>{
  Product.find({active:true})
  .then((p)=>{
    res.status(200).json(p)
    console.log(p)
  })
  .catch((e)=>next(e))
})

//Create a product
router.post('/create',(req,res,next)=>{
  Product.create(req.body)
  .then((response) =>{
      res.json(response)
  })
  .catch((err) =>{
      res.json(err);
  })
})



module.exports = router;
