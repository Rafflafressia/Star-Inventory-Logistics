const router = require('express').Router();
const { UserData, Employee } = require('../../models');
const bcrypt = require('bcrypt');

// create employee
router.post('/add-employee', async (req, res) => {

    /* The data pass in should look like this
    {
        user_name: AlexS
        password: 123456
        first_name: Alex
        last_name: Su
        postion: manager
    }
    
    */

    try {
        
        const newPassword = await bcrypt.hash(req.body.password, 10);

        const authData = await UserData.create({

            user_name: req.body.user_name,
            password: newPassword

        });


        const userInfoData = await Employee.create({
          
            user_id: authData.user_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            position: req.body.position

        });

        res.status(200).json({"message":"user created successfully",authData,userInfoData});

    } catch(err){

        res.status(500).json(err);

    }
});


// Get all Employee
router.get('/get-all-employee', async (req, res)=> {

    try {
        const employeeData = await Employee.findAll({
            include: {model: UserData}
        });

        res.status(200).json(employeeData)
    } catch (err) {
        res.status(404).json(err);
    }
    
})

module.exports = router;