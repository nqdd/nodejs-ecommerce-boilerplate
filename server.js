require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.APP_PORT || 3001;

const server = app.listen(PORT, () => console.log(`server listen on port ${PORT}`));

process.on('SIGINT', () => {
    server.close(() => console.log('server is shutdown'));
})
