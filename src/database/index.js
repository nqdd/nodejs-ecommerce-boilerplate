'use strict';
const mongoose = require('mongoose');
const { config } = require('../configs/mongodb');

const CONNECTION_STRING = `mongodb://${config.host}:${config.port}/${config.name}`;

class Database {
    static instance = null;

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    connect() {
        console.log('connecting to database...');
        mongoose.connect(CONNECTION_STRING, {
            maxPoolSize: 100
        }).then(() => {
            console.log('connect to database successfully!');
        }).catch((error) => {
            console.log('connect to database failure!', error)
        })
    }
}

const database = Database.getInstance();

module.exports = database;