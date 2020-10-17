const Joi = require("joi");

const schema = {
    user: Joi.object({
        fname: Joi.string().alphanum().required(),
        lname: Joi.string().alphanum().required(),
        mobile_no: Joi.string().max(10).min(10).message('Invalid amaobile Number').required(),
        email_id: Joi.string().email().required(),
        birth_date: Joi.date().max('1-1-2004'),
        gender: Joi.string().required(),
        address: Joi.string().max(150).required(),
        city: Joi.string().required(),
        pincode: Joi.number().max(6).required(),
        pan_no: Joi.number().max(16).required(),
        adhar_no: Joi.number().max(16).required()
    })
};
module.exports = schema;
