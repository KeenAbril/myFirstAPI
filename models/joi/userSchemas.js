const Joi = require('@hapi/joi')
module.exports.createUserSchema = Joi.object({
    name: Joi.string().regex(/^[A-Za-z]+$/).min(3).max(20).required(),
    job: Joi.string().alphanum().min(5).max(50).required(),
    birthday: Joi.date().greater("1-1-2000").iso().required(),
    username: Joi.string().alphanum().min(3).max(20).required(),
    //mail: Joi.mail().min(5).max(30)
})