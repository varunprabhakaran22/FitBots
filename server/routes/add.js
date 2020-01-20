//importing all the packages 
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
  
const Course = require('../models/add')
  
// Post method-  to post add new book to db
router.post("/add", async (req,res)=>{ 
    //room for improvement is there
    try{
        const course = new Course({
            name : req.body.name,
            university : req.body.university, 
            provider: req.body.provider,
        })

        let result = await course.save() 
        console.log("created")
        console.log(result);
    } 
    catch(err){
        console.log(err);
    }
    console.log("routes");
    console.log(res);
    console.log(res.body);
})  

module.exports = router;