const router = require('express').Router();
const {Auth} = require('../../models');



router.post('/login', async (req, res) => {

    try{
        const userData = await Auth.findOne({
            where:{user_name: req.body.username}
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
        
        /* save session info */
        req.session.save(() => {
            req.session.user_id = userData.dataValues.user_id;
            req.session.logged_in = true;
    
            res.json({ user: userData, message: 'You are now logged in!' });
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