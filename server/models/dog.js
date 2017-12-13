var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    breed: { type: String, required: true},
    age: { type: Number, required: true },
    color: { type: String, required: true }
}, { timestamps: true });

mongoose.model('Dog', DogSchema);
var Dog = mongoose.model('Dog');