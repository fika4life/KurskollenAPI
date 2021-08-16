const express = require('express');
const dotenv = require('dotenv');

//Route files
const courses = require('./routes/courses');

dotenv.config({ path: './config/config.env' });

const app = express();

//mount router
app.use('/courses', courses);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
