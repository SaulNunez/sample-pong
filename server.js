const gameport = process.env.PORT || 4004;
const io = require('socket.io');
const express = require('express');
const UUID = require('node-uuid');
const verbose = true;
const app = express.createServer()

let messagesReceived = [];

app.listen(gameport);
console.log('\t :: Express :: Listening on port ' + gameport );
app.get('/', function (request, result) {
  result.sendfile(__dirname + '/index.html');
});

app.get('/*', function (req, res, next) {
  const file = req.params[0];

  //For debugging, we can track what files are requested.
  if (verbose) console.log('\t :: Express :: file requested : ' + file);

  //Send the requesting client the file.
  res.sendfile(__dirname + '/' + file);

})

const socketio = io.listen(app);

socketio.configure(function () {
  socketio.set('log level', 0);

  socketio.set('authorization', function (handshakeData, callback) {
    callback(null, true);
  });
});

socketio.sockets.on('connection', function (client) {
  //Generate a new UUID, looks something like 
  //5b2ca132-64bd-4513-99da-90e838ca47d1
  //and store this on their socket/connection
  client.userid = UUID();
  //tell the player they connected, giving them their id
  client.emit('onconnected', { id: client.userid });
  findGame(client);
  //Useful to know when someone connects
  console.log('\t socket.io:: player ' + client.userid + ' connected');

  client.on('message', function(message){
    //Processing message
    let messageParts = message.split('.');
    let type = messageParts[0];
    //
    
    if(type == 'i'){ // 'i' input

    }
  });
  //When this client disconnects
  client.on('disconnect', function () {
    //Useful to know when someone disconnects
    console.log('\t socket.io:: client disconnected ' + client.userid);

  }) 

})

var findGame = function (client){

}

var handleGame = function (client, messageParts){

}