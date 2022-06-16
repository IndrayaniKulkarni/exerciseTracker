//adding routes for performing CRUD using server

const router = require('express').Router();//route creating
let User = require('../models/user.model');//mongoose model
//first in point 
//http get request on /users/ [path]
router.route('/').get((req,res) => {
     User.find()// is it for displaying data?? and if not found then it shall catch and show error (verify) 
     //find method will go into MongoDB atlas database and get a list of all the users
       .then(users => res.json(users))//return in json format
       .catch(err => res.status(400).json('Error:' + err));
});

//http incoming post request
router.route('/add').post((req,res) => {
    const username = req.body.username;

    const newUser = new User({username});//create instance

    newUser.save() //save method
     .then(() => res.json('User added!'))
     .catch(err => res.status(400).json('Error: ' + err));
     
});

module.exports = router;
