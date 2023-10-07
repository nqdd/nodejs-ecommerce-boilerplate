require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => console.log(`server listen on port ${PORT}`));
