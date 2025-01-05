const express = require('express');
const  courseRouter = express.Router();

    courseRouter.post('/purchase',(req,res)=>{
        res.json({
            message:"purachase end point"
        })
    })

    courseRouter.get('/',(req,res)=>{
        res.json({
            message:"courses end point"
        })

    })

module.exports = {
    courseRouter
}