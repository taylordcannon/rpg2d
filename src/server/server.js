const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {});


app.get('/', function(req, res) {
    //res.sendfile(__dirname + '../../dist/index.html');
    res.sendfile( __dirname + '/index.html');
});

app.use('/client', express.static(__dirname + '../../dist/index.html'));

server.listen(2000);
console.log('Sever started...');

io.sockets.on('connection', function(socket){
    console.log('New connection established...');

    socket.on('Yay!', function(){
        console.log('YEAH!');
    });

    socket.emit('serverMsg', {
        msg:'Hello.',
    });
});