const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
//Route files
const courses = require('./routes/courses');

//Load env variables
dotenv.config({ path: './config/config.env' });

//connect to database
connectDB();

const app = express();

//Body Parser
app.use(express.json());

//mount router
app.use('/courses', courses);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

//handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`MongoDB Error: ${err.message}`);

  //clsoe server and exit process
  server.close(() => process.exit(1));
});
