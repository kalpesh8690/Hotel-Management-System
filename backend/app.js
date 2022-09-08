express = module.exports = require('express')
const app = express();


// APP_PATH
path = module.exports = require('path');
APP_PATH = module.exports = __dirname;

// CONFIG

CONFIG = module.exports = require('./config/config.json');
JWT = module.exports = require('jsonwebtoken');

// COMMON
__ = module.exports = require('./common/common')

// UPLOAD
require('./common/upload')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Static
app.use(express.static('public'))
app.use(express.static('public/images'))

var cors = require('cors')
app.use(cors())


// DB Connection
mongoose = module.exports = require('mongoose')
mongoose.connect(CONFIG.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

db.on('error', (err) => {
    console.log('Fail to connect DB', err);
});

db.once('open', () => {
    console.log('Database connected successfully');
});



// Models
require('./models/init')

// Contoller
require('./controllers/init')

// mail
_Mail = module.exports = require('./mail/mail');




// Routes
const WEB = require('./routes/web');
const API = require('./routes/api')

app.use('/', WEB);
app.use('/api/v1/', API);



// Nodemon
var nodemon = require('nodemon');
nodemon[app]


module.exports = app;