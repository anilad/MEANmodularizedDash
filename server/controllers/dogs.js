var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');
module.exports = {
    create: function (req, res) {
        var dogs = new Dog({ name: req.body.name, breed: req.body.breed, age: req.body.age, color: req.body.color });
        dogs.save(function (err) {
            if (err) {
                res.render('new', { errors: dogs.errors, dogs: [] })
            } else {
                res.redirect('/');
            }
        })
    },
    readAll: function (req, res) {
        var dogs = Dog.find({}, function (err, dogs) {
            if (err) {
                res.render('index', { dogs: [] })
            }
            else {
                res.render('index', { dogs: dogs });
            }
        })
    },
    readOne: function (req, res) {
        var dog = Dog.find({ _id: req.params.id }, function (err, dog) {
            if (err) {
                res.render('display', { dog: [] })
            }
            else {
                res.render('display', { dog: dog });
            }
        })
    },
    readOneForUpdate: function (req, res) {
        var dog = Dog.find({ _id: req.params.id }, function (err, dog) {
            if (err) {
                res.render('edit', { dog: [] });
            }
            else {
                res.render('edit', { dog: dog });
            }
        });
    },
    update: function (req, res) {
        Dog.update({ _id: req.params.id }, { $set: { name: req.body.name, breed: req.body.breed, age: req.body.age, color: req.body.color } }, function (err) {
            res.redirect('/');
        });
    },
    destroy: function (req, res) {
        Dog.remove({ _id: req.params.id }, function (err) {
            res.redirect('/')
        })
    }

}