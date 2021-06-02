// importing modules
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const helmet = require('helmet');


// setting up environment variables
if (process.env.NODE_ENV !== "production")
  require('dotenv').config();

// importing routes
const fetchCountry = require('./routes/fetchCountry');


const app = express();


// setting up middleware
app.use(logger('dev'));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(xss());
app.use(helmet());


// database connection
const DBUrl = process.env.DB_URI;

mongoose.connect(DBUrl, 
{
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(()=>{
    console.log('Database connection successful !');
  })
  .catch((err, next) => {
    console.log('Database connection failed !');
    console.log(err);
    next(createError(500))
  })


// request rate limit
const limit = rateLimit({
  max: 200,
  windowMs: 15*60*1000,
  message: "Too many requests. Wait for 15 minutes.",
});

// routes
app.use('/bifrost/v1.0/', fetchCountry, limit);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
