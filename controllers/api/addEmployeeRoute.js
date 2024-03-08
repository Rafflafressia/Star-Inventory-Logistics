const router = require('express').Router();
const { UserData, Employee } = require('../../models');
const bcrypt = require('bcrypt');

// create employee
// TODO need to write a helper to hash the password here.
router.post('/', async (req, res) => {

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
        console.log(req.body);
        const newPassword = await bcrypt.hash(req.body.password, 10);

        const authData = await UserData.create({

            user_name: req.body.user_name,
            password: newPassword

        });



        const userInfoData = await Employee.create({
          
            user_id: authData.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            position: req.body.position

        });

        res.status(200).json({"message":"user created successfully",authData,userInfoData});

    } catch(err){

        res.status(500).json(err);

    }
});

module.exports = router;