const multer = require("multer");
const path = require('path');

module.exports = {

    // define the storage destination
    storage: multer.diskStorage({
        
        // defining the path using resolve to avoid issues in windows/mac Os/linux notation
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
       
        // Formating file name
        filename: (req, file, cb) => {

            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext); 

            cb(null, `${name}-${Date.now()}${ext}`);
        }
    }),
}