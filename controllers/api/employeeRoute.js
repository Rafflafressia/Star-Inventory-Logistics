const router = require('express').Router();
const { UserData, Employee } = require('../../models');

// Get all Employee
router.get('/', async (req, res)=> {

    try {
        const employeeData = await Employee.findAll({
            include: {model: UserData}
        });

        res.status(200).json(employeeData)
    } catch (err) {
        res.status(404).json(err);
    }
    
})