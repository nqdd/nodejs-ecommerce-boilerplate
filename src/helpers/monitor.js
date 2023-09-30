'use strict';

const mongoose = require('mongoose');

const logResourceUsage = () => {
    const memoryUsage = process.memoryUsage().rss;
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);
}

const logDatabasebActiveConnection = () => {
    const numberOfConnections = mongoose.connections.length;
    console.log(`Connection acitve: ${numberOfConnections}`);
}

module.exports = {
    logResourceUsage,
    logDatabasebActiveConnection
}