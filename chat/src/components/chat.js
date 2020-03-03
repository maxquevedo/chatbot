import React from 'react';
import { Fragment } from 'react';
import $ from 'jquery';

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
    const { historial } = this.state;
    return <Fragment>
        <div className="w-100" style={{marginLeft:'-6%' }} width="100%" height="100%">
            <ul id="messages" style={{textDecoration: 'none', listStyleType:'none'}}>
                <li style={{fontSize:25,fontFamily:'Helvetica,sans-serif' }}>Wena</li>
            </ul>
            { this.mostrarHistorial(historial) }
        </div>
    </Fragment>;
  }

  componentDidMount(){
    const { url, username } = this.state;
    var socket = require('socket.io-client')(url);
    socket.on('connect', () => {
      console.log("conectado");
    })
    
    socket.on('chat message', (msg) => {
      $("#messages").append(`<li>${username}: ${msg}</li>`)
    })
  }
}

export default Chat;
