var express = require('express');
var router = express.Router();
var passport = require('passport');
var userService = require('../services/user-service');
var config = require('../config');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
  var vm = {
    title: 'Create a docket'
  };
  res.render('dockets/create', vm);
});

router.post('/create', function(req, res, next) {
  userService.addDocket(req.body, function(err) {
    //if (err) {
      console.log(err);
      var vm = {
        title: 'Create a docket',
        input: req.body
        //error: err
      };
      //delete vm.input.password;
      return res.render('dockets/create', vm);
    //}
    // req.login(req.body, function(err) {
    //   res.redirect('/dockets');
    // });
  });
});



module.exports = router;