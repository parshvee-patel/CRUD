import express from 'express';
import userController from '../controller/user_controller';
import registerValidation from "../validation/userValidation";

const router = express.Router();

//* Call router for user 
router.get('/user', userController.getUser);

//* Call home page with get method
router.get('/', async (req, res) => {
    res.render('home');
})

//* Call Registration router page with get method
router.get('/registration', async (req, res) => {
    const registration = new Registration(req.body);
    try {
        await registration.save();
        res.status(201).send(registration);
    } catch (error) {
        res.status(500).send(error);
    }
})

//* Call Registration with post method
router.post('/registration', registerValidation, userController.postRegistar);

//* Call get Registration with Userid 
router.get('/registration/:id', userController.getData);

//* Call post Registration with Userid 
router.post('/registration/:id', userController.postRegistartion);

//* Delete userdata using get method
router.get('/delete/:id', userController.getDelete);

module.exports = router;