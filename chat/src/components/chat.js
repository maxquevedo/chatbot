import React from 'react';
import { Fragment } from 'react';
import $ from 'jquery';
import io from 'socket.io-client';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      historial: [],
      url: 'http://localhost:3001',
    };
  }

  mostrarHistorial = (historial) => {
      
  }

  render() {
    const { url } = this.state;
    var sockete = io(url);    
    /*
        Es importante diferenciar el tipo de evento, message son los recibidos 
        y como se ve, para enviar, se usa el evento de chat message.
    */
    sockete.on('message', (msg) => {
      console.log('hnito teni mensaje: ',msg)
      $("#messages").append(`<li class="text-right" style='font-size:2em'> ${msg}</li>`)
    })

    return <Fragment>
        <div className="w-100" style={{marginLeft:'-6%' }} width="100%" height="100%">
            <ul id="messages" style={{textDecoration: 'none', listStyleType:'none'}}></ul>
        </div>
    </Fragment>;
  }

  componentDidMount(){
    const { url } = this.state;
    var sockete = io(url);
    sockete.on('connect', () => {
      console.log("conectado");
    })
  }


}

export default Chat;