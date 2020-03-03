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
    socket.on('chat message',function(msg){
      var msj = msg.toLowerCase();
      /*
        broadcast envia el mensaje a todos menos al emisor
        los eventos tipo chat message le llegan al "servidor"
        y los de evento message al cliente
      */
      socket.broadcast.emit('chat message',msg)
      if(msj.includes('horario de atencion') || msj.includes('horarios de atencion')){
        socket.broadcast.emit('message','nuestro horario de atencion es de 09:00 a 21:00')
        console.log("entro en horariosss");
      }
      if(msj.includes('sucursales')){
        socket.broadcast.emit('message','Esquina Blanca #0123,Maipú')
        socket.broadcast.emit('message','Esquina Roja #0123,Las Condes')
        socket.broadcast.emit('message','Esquina Negra #0123,Lampa')
        socket.broadcast.emit('message','Esquina Verde #0123,Colina')
        socket.broadcast.emit('message','Esquina Amarilla #0123,Cerro Navia')
        socket.broadcast.emit('message','Esquina Violeta #0123,Pudahuel')
        socket.broadcast.emit('message','Esquina Azul #0123,Conchalí')
      }
    })
    socket.on('message', function(msg){
      socket.broadcast.emit('message', msg);
    });
});
http.listen(PORT)