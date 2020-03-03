import React from 'react';
import Enviar from './components/enviar';
import Chat from './components/chat';
import './App.css';

function App() {
  return (
    <div className="App container">
        <Chat/>
        <Enviar/>
    </div>
  );
}

export default App;
