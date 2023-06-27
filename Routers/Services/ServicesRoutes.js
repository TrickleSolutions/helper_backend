const router = require("express").Router()
const { AddService, GetAllServices, DeleteServices, UpdateService } = require("../../Controllers/Services/ServicesController")


// add the service 
router.post('/add', AddService);
// get all the service 
router.get("/getall", GetAllServices);
// for sigle data
router.post("/get", GetAllServices);
// delete by sevice id 
router.post("/deleteservice", DeleteServices);
// update the service 
router.patch("/update", UpdateService);


module.exports = router 
