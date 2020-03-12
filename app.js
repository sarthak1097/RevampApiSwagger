var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//v1 api routes
app.use('/api/v1/', require('./routes/v1'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.use( (request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({msg: err.message});
});



module.exports = app;
