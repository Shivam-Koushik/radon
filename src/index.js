const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
// const route1 = require('../logger/logger.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);
// app.use('/', route1);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

