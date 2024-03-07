const router = require('express').Router();
const { UserInfo, Auth } = require('../../models');

// create employee
// TODO need to write a helper to hash the password here.
router.post('/', async (req, res) => {
    try {
        const authData = await Auth.create({

            user_name: req.body.user_name,
            password: req.body.password

        });

        const userInfoData = await UserInfo.create({
          
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