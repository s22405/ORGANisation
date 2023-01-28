var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const doctorRouter = require('./routes/doctorRoute');
const operationRouter = require('./routes/operationRoute');
const willingOrganDonorRouter = require('./routes/willingOrganDonorRoute');
const organRouter = require('./routes/organRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/doctors', doctorRouter);
app.use('/operations', operationRouter);
app.use('/willingOrganDonors', willingOrganDonorRouter);
app.use('/organs', organRouter);

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
  res.render('error');
});

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(error => {
      console.log(error);
    });

const doctorApiRouter = require('./routes/api/DoctorApiRoute');
const organApiRouter = require('./routes/api/OrganApiRoute');
const willingOrganDonorApiRouter = require('./routes/api/WillingOrganDonorApiRoute');
const operationApiRouter = require('./routes/api/OperationApiRoute');
app.use('/api/doctors', doctorApiRouter); //TODO /api/doctors ?
app.use('/api/organs', organApiRouter); //TODO /api/doctors ?
app.use('/api/willingOrganDonors', willingOrganDonorApiRouter); //TODO /api/doctors ?
app.use('/api/operations', operationApiRouter); //TODO /api/doctors ?

module.exports = app;
