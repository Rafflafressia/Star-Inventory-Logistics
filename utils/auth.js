const withAuth = (req, res, next) => {

    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
};

const isManager = (req, res, next) => {
  if (!req.session.position == "manager") {
    res.redirect('/');
  }else {
    next();
  }
  
}

  
  module.exports = {withAuth,isManager};