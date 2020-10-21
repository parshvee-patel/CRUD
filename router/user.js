import express from 'express';
import userController from '../controller/user_controller';
const router = express.Router();

router.get('/user', userController.getUser);
import registerValidation from "../validation/userValidation";

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/registration', (req, res) => {
    res.render('registration');
})

router.post('/registration',registerValidation, userController.postRegistar);

router.get('/registration/:id', userController.getData);

router.post('/registration/:id', userController.postRegistartion);

router.get('/delete/:id', userController.getDelete);

module.exports = router;