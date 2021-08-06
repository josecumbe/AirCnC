const mongoose = require("mongoose");


const spotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String], // for list of strings/techs

    // Declaring a object
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // saying that the object is a 'USER' 
    },
}, 
{
    toJSON: {
        virtuals: true,
    },
});

// To create URL to the file locally stored
spotSchema.virtual('thumbmail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model("Spot", spotSchema);

