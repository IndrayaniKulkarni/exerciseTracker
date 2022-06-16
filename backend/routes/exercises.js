const router = require('express').Router();
let Exercise = require('../models/exercise.model');
//http get request

router.route('/:username').get((req, res) => {
    Exercise.find({username: req.params.username})
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/').get((req, res) => {
    Exercise.find()
     .then(exercises => res.json(exercises))//return json format
     .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    //new instance?
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
     .then(() => res.json('Exercise added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});

//for delete and update
//:id -object id
//get
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: '+ err));
});
//get using username
//delete request
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: '+ err));
});


router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
     .then(exercise => {
         exercise.username = req.body.username;
         exercise.description = req.body.description;
         exercise.duration = Number(req.body.duration);
         exercise.date = Date.parse(req.body.date);
         
         exercise.save()
           .then(() => res.json('Exercise updated!'))
           .catch(err => res.status(400).json('Error: '+ err));
     })
    .catch(err => res.status(400).json('Error: '+ err));
});
 
module.exports = router;

//need to add API endpoint
//checking using insomnia a tool -test server API
//another postman