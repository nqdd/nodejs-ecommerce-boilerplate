const app = require('./src/app');

const port = 3001;

const server = app.listen(port, () => console.log(`server listen on port ${port}`));

process.on('SIGINT', () => {
    server.close(() => console.log('server is shutdown'));
})
