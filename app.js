// importing modules
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');


// importing routes
const fetchCountry = require('./routes/fetchCountry');


const app = express();


// setting up middleware
app.use(logger('dev'));
app.use(express.json({ limit : "10kb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// database connection
mongoose.connect('mongodb://localhost:27017/bifrost', 
{
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(()=>{
    console.log('Database connection successful !');
  })
  .catch(err => {
    console.log('Database connection failed !');
    console.log(err);
  })

// limit request to server to avoid dos attacks
const limit = rateLimit({
  max: 200,
  windowMs: 30*60*1000, // 30 minutes block
  message: "Too many requests, wait for 30 minutes now"
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
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
