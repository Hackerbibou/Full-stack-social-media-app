
require('dotenv').config();
require('./config/database');
require('./config/passport');
require('./config/auth');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var $ = require('jquery')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const likesRouter = require('./routes/likes');
const profileRouter = require('./routes/profile');
const isLoggedIn = require('./config/auth');



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'))

app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
	})
)

app.use(passport.initialize())
app.use(passport.session())

app.use(function (req, res, next) {
	res.locals.user = req.user

	next()
})

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', isLoggedIn )
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/likes', likesRouter);
app.use('/profile', profileRouter);




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

module.exports = app;
