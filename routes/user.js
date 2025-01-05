const express = require('express');
const userRouter = express.Router();

    userRouter.post('/signup',(req,res)=>{
        res.json({
            message:"signup end point"
        })
    })
    
    userRouter.post('/signin',(req,res)=>{
        res.json({
            message:"signin  end point"
        })
    })
module.exports = {
    userRouter
}