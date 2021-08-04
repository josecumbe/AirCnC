const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {

        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        // To show user details (atributes)
        await booking.populate('user').populate('spot').execPopulate();


        return res.json(booking);
    }
}