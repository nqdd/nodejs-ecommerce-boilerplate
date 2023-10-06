'use strict';

const mongoose = require('mongoose');

class HealthHepler {
    static instance = null;

    static getInstance() {
        if (!HealthHepler.instance) {
            HealthHepler.instance = new HealthHepler();
        }
        return this.instance;
    }

    run() {
        setInterval(() => {
            this.checkResourceUsage();
            this.checkDatabasebActiveConnection();
        }, 5000)
    }

    checkResourceUsage = () => {
        const memoryUsage = process.memoryUsage().rss;
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);
    }

    checkDatabasebActiveConnection = () => {
        const numberOfConnections = mongoose.connections.length;
        console.log(`Connection acitve: ${numberOfConnections}`);
    }
}


module.exports = HealthHepler.getInstance();