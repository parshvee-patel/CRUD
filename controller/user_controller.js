
import connection from '../config/database';

// get all  user 
async function getUser (req,res,next) {
    const sql = 'SELECT * FROM users';
    connection.query(sql, (err, userData) => {
        if (err) throw err;
        res.send(userData);
    });
}

//Get registration data using id
async function getData (req,res,next) {
    const sql = 'SELECT * FROM users';
    connection.query(sql, (err, userData) => {
        if (err) throw err;
        res.send(userData);
    });
}

//Get regisatration module
async function postRegistar (req,res,next) {
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
    connection.query(sql, (err) => {
        if (err) {
            return console.error('error: ' + err.message);
        }
        res.send({"Code":"201", "Message":"Data inserted Successfuly"});
    })
}

//Post registration data using id
async function postRegistartion (req,res,next) {
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

    const sql = "UPDATE users SET emp_fname='"+emp_fname+"', emp_lname='"+emp_lname+"', mobile_no='"+mobile_no+"', email_id='"+email_id+"', birth_date='"+birth_date+"',gender='"+gender+"',address='"+address+"', city='"+city+"', pincode='"+pincode+"', pan_no='"+pan_no+"', adhar_no='"+adhar_no+"' WHERE id="+req.params.id;
    connection.query(sql, (err) => {
        if(err)
        {                            
            return console.error('error: ' + err.message);
        }
        res.send({"Code":"201", "Message":"Data Updated Successfuly"});
     })
}

//Get Delete data
async function getDelete (req,res) {
    const sql = "DELETE FROM users where id="+req.params.id;
    connection.query(sql, (err, userData) => {
        if (err) throw err;
        res.send(userData);
    }); 
}

module.exports = {
    postRegistar:postRegistar,
    getUser:getUser,
    getData:getData,
    postRegistartion:postRegistartion,
    getDelete:getDelete,
    
}
