const router = require("express").Router()
const { SignupUser, LoginUser, DeleteUsers, AllCustomer } = require("../../Controllers/UserController/UserAuthController")


router.post("/signup", SignupUser);
// login the user 
router.post("/login", LoginUser);
// delete all 
router.delete("/deleteall", DeleteUsers);
// all customers
router.get("/getall", AllCustomer);
// get the single user by id
router.post("/get", AllCustomer);



module.exports = router


