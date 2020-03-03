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
    socket.on('chat message', function(msg){
      socket.broadcast.emit('chat message', msg);
      if(msg.toLowerCase().includes('horario de atencion')){
        io.emit('chat message','nuestro horario de atencion es de 09:00 a 21:00')
      }
      if(msg.toLowerCase().includes('sucursales')){
        io.emit('chat message','Esquina Blanca #0123,Maipú')
        io.emit('chat message','Esquina Roja #0123,Las Condes')
        io.emit('chat message','Esquina Negra #0123,Lampa')
        io.emit('chat message','Esquina Verde #0123,Colina')
        io.emit('chat message','Esquina Amarilla #0123,Cerro Navia')
        io.emit('chat message','Esquina Violeta #0123,Pudahuel')
        io.emit('chat message','Esquina Azul #0123,Conchalí')
      }
  });
});
http.listen(PORT, () => {
    console.log('Conectados desde el backend');
})