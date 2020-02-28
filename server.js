'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 8000;
const app = express();
const { handleJoke } = require('./handlers')

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
	app.use(morgan('dev'))
	app.use(express.static('public'))
    app.use(bodyParser.json())
    app.use(express.urlencoded({extended: false}))
    app.set('view engine', 'ejs')

    // endpoints
    app.post('/joke', handleJoke)


    .listen(PORT, () => console.log(`Listening on port ${PORT}`));