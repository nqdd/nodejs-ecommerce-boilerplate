const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// connect database
require('./database/mongodb').connect();

// health check
require('./helpers/health.helper').run();

// routes
app.use(require('./routes'))

// hanlding error
module.exports = app;