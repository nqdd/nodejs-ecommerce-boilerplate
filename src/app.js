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
const database = require('./database');
database.connect();

// logger
const { logResourceUsage, logDatabasebActiveConnection } = require('./helpers/monitor.js');

setInterval(() => {
    logResourceUsage();
    logDatabasebActiveConnection();
}, 5000);

// routes
app.use(require('./routes'))

// hanlding error

module.exports = app;