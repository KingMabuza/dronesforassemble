/*jshint esversion: 8*/

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const db = require("./db");
const nunjucks = require("nunjucks");



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.set("view engine", "html");
module.exports = app;
