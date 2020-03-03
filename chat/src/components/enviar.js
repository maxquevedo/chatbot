import React, { Fragment } from 'react';
import $ from 'jquery';
import io from 'socket.io-client';

class Enviar extends React.Component {
  constructor() {
    super();
    this.state = {
      mensaje: ''
    };
  }

  _handleChange = (event) => {
    this.setState({mensaje:event.target.value})
  }

  _handleEnter = async(event) => {
    if (event.keyCode === 13){
        this._handleSubmit(event);
    } 
  }

  _handleSubmit = (event) =>{
    const socket = io('http://localhost:3001');
    var msj = document.getElementById("mensaje");
    event.preventDefault();
    socket.emit('chat message', $('#mensaje').val()); // <- envia el mensaje al socket
    $('#messages').append(`<li align='left' style='font-size:2em'>${msj.value}</li>`) // <- agrega el mensaje al chat
    msj.value='';


  }

  render() {
    return <Fragment>
      <form action="" method="" name="">
        <div className="form-group row fixed-bottom">
            <div className="col-10">
                <input className="form-control" autoComplete="off" style={{marginLeft:'5%'}} width="100" type="text" name="mensaje" id="mensaje" onChange={this._handleChange}/>
            </div>
            <div className="col-2">
                <button className="btn btn-primary" onClick={this._handleSubmit} style={{marginLeft:'-15%'}}>Enviar</button>
            </div>
        </div>
      </form>
    </Fragment>
  }

  componentDidMount(){
      document.addEventListener('keypress', this._handleEnter);
  }

  componentWillUnmount(){
    document.removeEventListener('keypress',this._handleEnter);
  }
}

export default Enviar;
