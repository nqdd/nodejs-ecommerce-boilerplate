const DATABASE_HOST = process.env.MONGO_HOST || '127.0.0.1';
const DATABASE_NAME = process.env.MONGO_NAME || 'dev';
const DATABASE_PORT = process.env.MONGO_PORT || 27017;

const config = {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    name: DATABASE_NAME
}

module.exports = { config };