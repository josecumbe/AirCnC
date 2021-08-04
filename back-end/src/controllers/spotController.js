const Spot = require('../models/Spot');
const User = require('../models/User');


module.exports = {

    // Filtering and listing spots
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },
 
    // Saving the spot
    async store(req, res) {
        
        //Need the file name
        const { filename } = req.file;

        //Need the remaining spot details
        const { company, techs, price } = req.body;

        //Getting the user logged in 
        const { user_id } = req.headers; 

        //Check if user id exists before storing the spot
        const user = await User.findById(user_id);

        if(!user) {
            return res.status(400).json({ "error" : "User does not Exist" });
        }

        //Creating the spot
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company, // because they are the same, no need for assigning
            techs: techs.split(",").map(tech => tech.trim()),
            price // because they are the same, no need for assigning
        });

        return res.json(spot); 
    }
};