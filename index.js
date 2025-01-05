const express= require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/courses');
const { adminRouter } = require('./routes/admin');
const app = express();

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);


app.listen(3000);