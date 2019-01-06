const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
require('dotenv').config();

// Connect To Database
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true});

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+process.env.DATABASE_URL);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

// const users = require('./routes/users');
const index = require('./routes/index');
const contactMe = require('./routes/contactMe');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set view Engine
// app.set('view engine', 'jade');

// Body Parser Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use('/users', users);
app.use('/', index);

app.use('/contactme', contactMe);

// Index Route
// app.get('/', (req, res) => {
//   res.send('Invalid Endpoint');
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
