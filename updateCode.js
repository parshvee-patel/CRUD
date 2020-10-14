 const selectuser = "select * FROM users where id=" + req.params.id;
// connection.query(selectuser, function (err, data) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }
/// });
    //    // return data;
    //     let updateData = {};
    //     updateData = data[0]..emp_fname;
    //     console.log(data[0],'==============');
    //     const emp_fname = updateData.RowDataPacket.emp_fname;
    //     const emp_lname = updateData.RowDataPacket.emp_lname;
    //     const mobile_no = updateData.RowDataPacket.mobile_no;
    //     const email_id =updateData.RowDataPacket.email_id;
    //     const birth_date = updateData.RowDataPacket.birth_date;
    //     const gender = updateData.RowDataPacket.gender;
    //     const address = updateData.RowDataPacket.address;
    //     const city = updateData.RowDataPacket.city;
    //     const pincode = updateData.RowDataPacket.pincode;
    //     const pan_no = updateData.RowDataPacket.pan_no;
    //     const adhar_no = updateData.RowDataPacket.adhar_no;

    //     var sql = "UPDATE users SET emp_fname='"+emp_fname+"', emp_lname='"+emp_lname+"', mobile_no='"+mobile_no+"', email_id='"+email_id+"', birth_date='"+birth_date+"',gender='"+gender+"',address='"+address+"', city='"+city+"', pincode='"+pincode+"', pan_no='"+pan_no+"', adhar_no='"+adhar_no+"' WHERE id="+req.params.id;
    //     connection.query(sql, function(err) {
    //         if(err)
    //         {                            
    //             return console.error('error: ' + err.message);
    //         }
    //     })
    //     res.send("data Updated successfully");
    // })


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
     connection.query(sql, function(err) {
        if(err)
        {                            
            return console.error('error: ' + err.message);
        }
     })
    res.send("data Updated successfully");