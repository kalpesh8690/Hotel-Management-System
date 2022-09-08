const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(APP_PATH, 'public/images') )
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.' + __.ext(file.originalname))
    }
  })
   
  _upload = module.exports = multer({ storage: storage })