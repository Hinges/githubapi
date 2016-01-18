var express = require('express');
var index = require('./routes/index');

var app = express();

app.use(express.static('server/public'));
app.get('/', function(request, response){
    console.log('server hit');
    response.sendFile(__dirname + '/public/views/index.html');
});




server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on port', port);
});