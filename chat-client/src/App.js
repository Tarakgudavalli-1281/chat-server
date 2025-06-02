// src/App.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000'); // Adjust to your backend URL

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChat((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div className="app">
      <h1>React Chat</h1>
      <div className="chat-box">
        {chat.map((msg, index) => (
          <div key={index} className="chat-message">{msg}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-form">
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;