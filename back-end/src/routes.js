const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');
const bookingController = require('./controllers/bookingController');
const sessionController = require('./controllers/sessionController');
const spotController = require('./controllers/spotController');
const userSpotsController = require('./controllers/userSpotsController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Defining route
routes.post('/sessions', sessionController.store);
routes.post('/spots', upload.single('thumbnail'), spotController.store); 
routes.get('/spots', spotController.index); 
routes.get('/userspots', userSpotsController.show);
routes.post('/spots/:spot_id/bookings', bookingController.store);


// Exporting routes  
module.exports = routes;