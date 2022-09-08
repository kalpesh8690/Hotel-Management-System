
var app = require('../app');

var http = require('http');
const server = http.createServer(app);
server.listen(CONFIG.PORT,CONFIG.HOST,(err) =>{

    if(err){
        console.log('Error : ',err)
    } else {
        console.log(`Server started on ${CONFIG.HOST}:${CONFIG.PORT}`)
    }

});