const express= require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { UserEndPoint } = require('./user');
const { CoursesEndPoint} = require('./courses');
const app = express();


CoursesEndPoint(app);
UserEndPoint(app);


app.listen(3000);