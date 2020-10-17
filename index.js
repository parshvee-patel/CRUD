const express = require('express');
const bodyParser = require('body-parser');

var app = express();

const connection = require('./config/database');
const router = require('./router/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Set ejs templete
app.set('view engine', 'ejs');

//Get router module
app.use(router);

//Listing port
var port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
