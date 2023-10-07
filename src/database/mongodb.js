'use strict';
const mongoose = require('mongoose');
const config = require('@configs/mongo.config');

const CONNECTION_STRING = `mongodb://${config.host}:${config.port}/${config.name}`;

class MongoDb {
    static getInstance() {
        if (!MongoDb.instance) {
            MongoDb.instance = new MongoDb();
        }
        return MongoDb.instance;
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

module.exports = MongoDb.getInstance();