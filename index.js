import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const router = require('./router/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Set ejs templete
app.set('view engine', 'ejs');

//Get router module
app.use(router);

//Listing port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
