const express = require("express");
const adminRouter = express.Router();

adminRouter.post('/signup',(req,res)=>{
    res.json({
        message:"admin signup end point"
    })
})

adminRouter.post('/signin',(req,res)=>{
    res.json({
        message:"admin signin  end point"
    })
})
adminRouter.get('/course',(req,res)=>{
    res.json({
        message:"admin course listing end point"
    })
})

adminRouter.post('/course',(req,res)=>{
    res.json({
        message:"admin course add end point"
    })
})

adminRouter.put('/course',(req,res)=>{
    res.json({
        message:"admin course edit  end point"
    })
})
module.exports = {
adminRouter
}