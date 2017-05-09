var express = require('express');
var router = express.Router();

var User = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find(function(err, users) {
        if (!err) {
            console.log('GET /users');
            res.send(users);
        } else {
            console.log('ERROR: ' + err);
        }
    });
});

/* POST user creation */
router.post('/user', function(req, res, next) {
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        identification: req.body.identification,
        picture: req.body.picture,
        description: req.body.description
    });

    user.save(function(err) {
        if (!err) {
            console.log('CREATED');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.send(user);
});

/* PUT user update */
router.put('/user/id/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        name: req.body.name;
        email: req.body.email;
        username: req.body.username;
        password: req.body.password;
        phone: req.body.phone;
        address: req.body.address;
        identification: req.body.identification;
        picture: req.body.picture;
        description: req.body.description;

        user.save(function(err) {
            if (!err) {
                console.log('UPDATED!');
            } else {
                console.log('ERROR: ' + err);
            }
            res.send(user);
        });
    });
});

/* DELETE user */
route.delete('/user/id/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        user.remove(function(err) {
            if (!err) {
                console.log('REMOVED!');
            } else {
                console.log('ERROR: ' + err);
            }
        })
    });
});

/* GET user by UniqueId */
route.get('/user/id/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        if (!err) {
            console.log('GET /user/id/' + req.params.id);
            res.send(user);
        } else {
            console.log('ERROR: ' + err);
        }
    });
});

/* GET user by email */
route.get('/user/email/:email', function(req, res, next) {
    User.findOne({ 'email': req.params.email }, function(err, user) {
        if (!err) {
            console.log('GET /user/email/' + req.params.email);
            res.send(user);
        } else {
            console.log('ERROR: ' + err);
        }
    });
});

/* GET user by username */
route.get('/user/username/:username', function(req, res, next) {
    User.findOne({ 'username': req.params.username }, function(err, user) {
        if (!err) {
            console.log('GET /user/username/' + req.params.username);
            res.send(user);
        } else {
            console.log('ERROR: ' + err);
        }
    });
});

module.exports = router;