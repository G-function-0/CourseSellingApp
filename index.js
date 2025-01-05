const express= require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { UserRouter } = require('./routes/user');
const { CourseRouter } = require('./routes/courses');
const app = express();

app.use("/user",UserRouter);
app.use("/courses",CourseRouter);


app.listen(3000);