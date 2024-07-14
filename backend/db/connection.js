const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongoURL = process.env.DATABASE;

mongoose.connect(mongoURL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log(`Connection successful`);
}).catch((err) => {
    console.log(`No connection ${err}`);
});