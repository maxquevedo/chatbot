require('./bd');
const express = require('express');
const PORT = 3001;
const app = express();
const bodyParser = require('body-parser');
var  http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.get('/', (req, res) => res.sendFile(__dirname+'/prueba.html'))
app.get('/chat',(req,res) => res.send(usuario))

io.on('connection', function(socket){
  socket.on('chat', function (data) {
    io.sockets.socket(data.clientid).emit('chat', {
        msg: data.msg,
        senderid : socket.id
    }); 
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
http.listen(PORT, () => {
    console.log('Conectados desde el backend');
})