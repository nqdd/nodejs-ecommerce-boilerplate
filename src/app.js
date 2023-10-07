require('module-alias/register')
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
require('@database/mongodb').connect();

// routes
app.use(require('@routes'))

// heath check
const timeStart = new Date().toISOString();
app.get('/heath', (_, res) => {
    res.status(200).send(timeStart);
})

// hanlding error
module.exports = app;