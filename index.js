const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");
//const ejs = require('ejs');

var app = express();

const connection = mysql.createConnection(
    {
        host: "95.217.158.21",
        user: "parshvee_patel",
        password: "BNYw#nD$2bRr",
        database: "parshvee_test"
    }
)
connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Call Router for registration
app.get('/', function (req, res) {
    res.render('home');
})
app.get('/registration', function (req, res) {
    res.render('registration');
})

app.post('/registration', function (req, res, next) {
    console.log(req.body)
    const emp_fname = req.body.fname;
    const emp_lname = req.body.lname;
    const mobile_no = req.body.mobile_no;
    const email_id = req.body.email_id;
    const birth_date = req.body.birth_date;
    const gender = req.body.gender;
    const address = req.body.address;
    const city = req.body.city;
    const pincode = req.body.pincode;
    const pan_no = req.body.pan_no;
    const adhar_no = req.body.adhar_no;

    const sql = "INSERT INTO users (emp_fname, emp_lname, mobile_no, email_id,birth_date,gender, address, city, pincode, pan_no, adhar_no ) VALUES ('" + emp_fname + "','" + emp_lname + "','" + mobile_no + "','" + email_id + "','" + birth_date + "','" + gender + "','" + address + "','" + city + "','" + pincode + "','" + pan_no + "','" + adhar_no + "')";
    connection.query(sql, function (err) {
        if (err) {
            return console.error('error: ' + err.message);
        }
        res.send({"Code":"201", "Message":"Data inserted Successfuly"});
    })
    // res.redirect('/user');
})

app.get('/user', function (req, res) {
    var sql = 'SELECT * FROM users';
    connection.query(sql, function (err, userData) {
        if (err) throw err;
        res.send(userData);
        // res.render('Listing', { userData });

    });
});

// get Data
app.get('/registration/:id',function(req,res) {
    const sql = "select * FROM users where id="+req.params.id;    
    connection.query(sql,function(err, userData){
        if (err) throw err;
        res.send(userData);
        // res.render('updateRegstration', { userData});
    }); 
});

app.post('/registration/:id', function (req, res, next) {
    const emp_fname = req.body.fname;
    const emp_lname = req.body.lname;
    const mobile_no = req.body.mobile_no;
    const email_id = req.body.email_id;
    const birth_date = req.body.birth_date;
    const gender = req.body.gender;
    const address = req.body.address;
    const city = req.body.city;
    const pincode = req.body.pincode;
    const pan_no = req.body.pan_no;
    const adhar_no = req.body.adhar_no;

    var sql = "UPDATE users SET emp_fname='"+emp_fname+"', emp_lname='"+emp_lname+"', mobile_no='"+mobile_no+"', email_id='"+email_id+"', birth_date='"+birth_date+"',gender='"+gender+"',address='"+address+"', city='"+city+"', pincode='"+pincode+"', pan_no='"+pan_no+"', adhar_no='"+adhar_no+"' WHERE id="+req.params.id;
    console.log('update query', sql)
    connection.query(sql, function(err) {
        if(err)
        {                            
            return console.error('error: ' + err.message);
        }
        res.send({"Code":"201", "Message":"Data Updated Successfuly"});
     })
    // res.send(userData);
    // res.redirect('/user');
})

// delete user api
app.get('/delete/:id',function(req,res) {
    const sql = "DELETE FROM users where id="+req.params.id;
    connection.query(sql,function(err, userData){
        if (err) throw err;
        res.send(userData);
        // res.redirect('/user');
    }); 
});

var port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
