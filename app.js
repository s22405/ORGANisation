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
const doctorApiRouter = require('./routes/api/DoctorApiRoute');
const organApiRouter = require('./routes/api/OrganApiRoute');
const willingOrganDonorApiRouter = require('./routes/api/WillingOrganDonorApiRoute');
const operationApiRouter = require('./routes/api/OperationApiRoute');
const session = require('express-session');

const authUtils = require('./util/authUtils')

const i18n = require('i18n');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'my_secret_password',
    resave: false
}));

app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser = loggedUser;
    if(!res.locals.loginError) {
        res.locals.loginError = undefined;
    }
    next();
});

i18n.configure({
    locales: ['pl', 'en'], // languages available in the application. Create a separate dictionary for each of them
    directory: path.join(__dirname, 'locales'), // TODO path to the directory where the dictionaries are located
    objectNotation: true, // enables the use of nested keys in object notation
    cookie: 'acme-hr-lang', //the name of the cookie that our application will use to store information about the language currently selected by the user
});
app.use(i18n.init); //initialization and connection to the application context
app.use(cookieParser('secret'));
app.use((req, res, next) => {
    if(!res.locals.lang) {
        const currentLang = req.cookies['acme-hr-lang'];
        res.locals.lang = currentLang;
    }
    next();
}); //TODO not sure if I added all the things needed to make languages work, check later

//business routes (I think)
app.use('/doctors', authUtils.permitAuthenticatedUser, doctorRouter);
app.use('/organs', authUtils.permitAuthenticatedUser, organRouter);
app.use('/willingOrganDonors', authUtils.permitAuthenticatedUser, willingOrganDonorRouter);
app.use('/operations', authUtils.permitAuthenticatedUser, operationRouter);


app.use('/', indexRouter);
app.use('/doctors', doctorRouter);
app.use('/operations', operationRouter);
app.use('/willingOrganDonors', willingOrganDonorRouter);
app.use('/organs', organRouter);

app.use('/api/doctors', doctorApiRouter);
app.use('/api/organs', organApiRouter);
app.use('/api/willingOrganDonors', willingOrganDonorApiRouter);
app.use('/api/operations', operationApiRouter);



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

module.exports = app;
