const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const logger = require('morgan');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(
    logger(formatsLogger, {
        skip: function (req, res) {
            return res.statusCode === 404;
        },
    })
);

const optionCors = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: '*',
};
app.use(cors(optionCors));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'portfolio-app', 'build')));
app.use(express.static(path.join(__dirname, '..', 'photo'))); // localhost:5000/avatars/myPhoto.png;

module.exports = app;
