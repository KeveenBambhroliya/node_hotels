const { default: mongoose, connect } = require("mongoose");
require('dotenv').config();

// const mongoURL = process.env.mongoURLocal

const mongoURL = process.env.mongoURL;

mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected');
})

db.on('error', (err) => {
    console.log(err);
})

db.on('disconnected', () => {
    console.log('disconnected');
})



module.exports = db;