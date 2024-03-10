const router = require('express').Router();
const {UserData, Employee} = require('../../models');



router.post('/login', async (req, res) => {

  try{
      const userData = await UserData.findOne({
          where:{user_name: req.body.user_name}
      })

  
      if(!userData){
          res.status(400).json({message: 'Incorrect username or password, please try again'});
          return;
      }
      
      /* Check if the password is correct */
      const validPassword = await userData.checkPassword(req.body.password);


      if(!validPassword){
          res.status(400).json({message: 'Incorrect username or password, please try again'});
      
          return;
      }

      const position = await Employee.findOne({
          where: {user_id: userData.dataValues.user_id}
      })

      /* save session info */
      req.session.save(() => {
          req.session.user_id = userData.dataValues.user_id;
          req.session.logged_in = true;
          req.session.position = position.dataValues.position;
  
          res.status(200).json({ user: userData, message: 'You are now logged in!',"login status":req.session});
      })
  }
  catch(err){
      res.status(500).json({"message":err});
  }
   

})



router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;