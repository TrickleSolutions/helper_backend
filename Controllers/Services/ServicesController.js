const ServiceModal = require("../../Models/ServiceModal/ServiceModal")


const AddService = async (req, res) => {

    // Store the data to the Database
    try {
        //  check the service is alereay register or not
        const isService = await ServiceModal.findOne({ serviceName: req.body.serviceName })
        if (isService) return res.status(409).json("Service Already Registered");

        // if not then store the data 
        const NewService = await new ServiceModal(req.body).save()
        res.status(200).json({
            error: false,
            data: NewService
        })

    } catch (error) {
        res.status(500).json({
            error: true,
            message: error,
        })
    }
}


const GetAllServices = async (req, res) => {

    try {
        // get all the services 
        const AllServices = await ServiceModal.find(req.body)
        if (!AllServices) return res.status(400).json("No data Found")

        res.status(200).json({
            error: false,
            data: AllServices
        })
    } catch (error) {
        res.status(500).json({
            error: true,
            error: error
        })
    }
}

const DeleteServices = async (req, res) => {
    try {
        const id = req.body._id

        // check is the data in db
        const result = await ServiceModal.findByIdAndDelete(id)
        if (result.deletedCount === 0) return res.status(400).json("Service Not Deleted")

        res.status(200).json("successfully deleted")
    } catch (error) {
        res.status(500).json({
            error: error,
        })
    }
}


// update the services
const UpdateService = async (req, res) => {

    try {
        // service id  
        const Id = req.body._id

        // find the service and update it 
        const UpdateService = await ServiceModal.findByIdAndUpdate(Id, req.body, { new: true })
        if (!UpdateService) return res.status(400).json({ error: true, message: "Service not Updated " })

        res.status(200).json({
            error: false,
            data: UpdateService
        })

    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}



module.exports = { AddService, GetAllServices, DeleteServices, UpdateService }


