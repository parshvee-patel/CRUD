const express = require("express");
const userController = require("../controller/user_controller");
const router = express.Router();

router.get('/user', userController.getUser);

const {addUserValidation} = require('../config/user_validation');

router.get('/', function (req, res) {
    res.render('home');
})

router.get('/registration', function (req, res) {
    res.render('registration');
})

router.post('/registration',addUserValidation, userController.postRegistar);

router.get('/registration/:id', userController.getData);

router.post('/registration/:id', userController.postRegistartion);

router.get('/delete/:id', userController.getDelete);

module.exports = router;