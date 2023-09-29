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