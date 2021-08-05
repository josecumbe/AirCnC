
const User = require('../models/User');


module.exports = {

    // Create a session/user
    async store (req, res) {
    const { email } = req.body;

    // Check if user exists or not (to avoid duplicates)
    let user = await User.findOne({ email });

    if (!user) {
        // Waiting for store to happen to procced
        user = await User.create({ email });
    }

    // Continue returning the user created
    return res.json(user);

 }
}