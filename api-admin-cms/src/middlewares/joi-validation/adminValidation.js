import Joi from 'joi'

export const newAdminValidation = (req, res, next) => {
    const schema = Joi.object({
        fname: Joi.string().alphanum().required().min(3).max(20),
        lname: Joi.string().required().min(3).max(20),
        email: Joi.string().email({minDomainSegments: 2}).required(),
        dob: Joi.date().allow(null),
        phone: Joi.string().required().min(10).max(15),
        address: Joi.string().allow(null).allow(""),
        password: Joi.string().required(),
    })


    const {values, error} = schema.validate(req.body)
    console.log(error)

    if (error) {
        return res.json({
            status: "error",
            message: error.message
        })
    }
    res.json({
        status: "success",
        message : "all good"
    })

    // next()

}

export default newAdminValidation;