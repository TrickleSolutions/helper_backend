const joi = require('joi')



const SingupValidate = (data) => {
    const validationScheme = joi.object({
        name: joi.string().min(2),
        gender: joi.string(),
        age: joi.number().min(1),
        memberid: joi.number(),
        address: joi.string().min(3),
        password: joi.string().min(6),
        landmark: joi.string(),
        email: joi.string().email().min(3),
        location: joi.string(),
        mobileNo: joi.number().min(9),
        telNo: joi.number().min(4),
        officeNo: joi.number().min(4),
        alternateNo: joi.number(),
        aadharno: joi.number().min(12),
        occupation: joi.string().min(2),
        designation: joi.string(),
        houseStatus: joi.string(),
        dob: joi.date(),
        doa: joi.date(),
        image: joi.string().min(4),
        spouseDetails: joi.object(),
        payment: joi.number(),
        discountAmt: joi.number(),
        recievedAmt: joi.number(),
        balanceAmt: joi.number(),
        paymentMethod: joi.string(),
        freeServices: joi.array()
    })
    return validationScheme.validate(data)
}
const LoginValidate = (data) => {
    const validationScheme = joi.object({
        email: joi.string().min(3).required(),
        password: joi.string().min(6).required()
    })
    return validationScheme.validate(data)
}


module.exports = { LoginValidate, SingupValidate };