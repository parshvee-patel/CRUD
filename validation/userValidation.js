const Joi = require("joi");
const schema =  Joi.object().keys({
        fname: Joi.string().alphanum().required(),
        lname: Joi.string().alphanum().required(),
        mobile_no: Joi.string().max(10).min(10).message('Invalid amaobile Number').required(),
        email_id: Joi.string().email().required(),
        birth_date: Joi.string().required(),
        gender: Joi.string().required(),
        address: Joi.string().max(150).required(),
        city: Joi.string().required(),
        pincode: Joi.number().required(),
        pan_no: Joi.number().required(),
        adhar_no: Joi.number().required()
})

const addUserValidation =  async (req,res,next) => {
    const value = await schema.validate(req.body);
    if (value.error) {
        res.json({
            success: 0,
            message: value.error.details[0].message
        })
    } else {
        next();
    }
}

module.exports = addUserValidation;
