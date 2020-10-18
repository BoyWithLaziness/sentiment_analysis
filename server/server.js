const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', require('./routes'));

app.use('/', function (req, res, next) {
    res.status(404).json({ status: "Page Not Found, Sorry Buddy..." }).end();
});

//port set
app.set('port', config.port);


//starting server
app.listen(app.get('port'), function () {
    console.log("App started on port.", app.get('port'));
});