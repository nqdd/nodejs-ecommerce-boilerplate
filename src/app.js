const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// connect database
const database = require('./dbs/init.mongodb.js');
database.connect();

// logger
const { logResourceUsage, logDatabasebActiveConnection } = require('./helpers/monitor.js');

setInterval(() => {
    logResourceUsage();
    logDatabasebActiveConnection();
}, 5000);

// routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello world!'
    return res.status(200).json({
        message: 'Hello world!',
        metadata: strCompress.repeat(100000)
    })
})

// hanlding error

module.exports = app;