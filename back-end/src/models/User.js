const mongoose = require("mongoose");


// Creating the object schema in the database
const userSchema = new mongoose.Schema({
    email: String,
});


// Exporting the model
module.exports = mongoose.model('User', userSchema);