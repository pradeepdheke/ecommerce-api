import express from 'express'
import { encryptPassword } from '../../helper/bcrypthelper.js'
import { insertAdmin } from '../../models/admin/Admin.model.js'
import {newAdminValidation} from '../middlewares/joi-validation/adminValidation.js'
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "GET got hit to the admin api"
    })
})

router.post("/", newAdminValidation, async(req, res, next) => {
    try {

        console.log(req.body)
        
        const hashPassword = encryptPassword(req.body.password)
    req.body.password = hashPassword
const result = await insertAdmin(req.body)


result?._id ?

    res.json({
        status: "success",
        message: "New admin got registered successfully"
        
    })
    :
    res.json({
        status: "error",
        message: "Unable to create new admin. PLease contact admin or try again later",
        hashPassword
    })
}
    catch (error) {
        error.status = 500
        if(error.message.includes("E11000 duplicate key")){
            error.message = "Email already exists"
            error.status = 200
        }

            next(error)

}

router.patch("/", (req, res) => {
    res.json({
        status: "success",
        message: "PATCH got hit to the admin api"
    })
});
})

export default router;