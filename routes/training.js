const router = require('express').Router();
let Training = require('../models/training.model');

router.route('/').get((req, res) => {
    Training.find()
    .then(training => res.json(training))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const type = req.body.type;
    const instructional = req.body.instructional;
    const openmat = req.body.openmat;
    const date = Date.parse(req.body.date);

    const newTraining = new Training({
        username,
        type,
        instructional,
        openmat,
        date,
    });

    newTraining.save()
    .then(() => res.json('Training Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route - training/id
router.route('/:id').get((req, res) => {
    Training.findById(req.params.id)
    .then(training => res.json(training))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete route
router.route('/:id').delete((req, res) => {
    Training.findByIdAndDelete(req.params.id)
    .then(() => res.json('Training Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// update by id (requires username)
router.route('/update/:id').post((req, res) => {
    Training.findById(req.params.id)
    .then(training => {
        training.username = req.body.username;
        training.type = req.body.type;
        training.instructional = req.body.instructional;
        training.openmat = req.body.openmat;
        exercise.date = Date.parse(req.body.date);

        training.save()
        .then(() => res.json('Training Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })

    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;