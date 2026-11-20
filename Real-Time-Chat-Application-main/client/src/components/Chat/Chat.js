import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

// For deployment, set REACT_APP_ENDPOINT to your server URL
const ENDPOINT = process.env.REACT_APP_ENDPOINT || 'http://localhost:5000';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name || '');
    setRoom(room || '');

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
        window.location.href = '/';
      }
    });

    // The server doesn't send timestamps, so we stamp each message when it arrives
    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, { ...msg, time: new Date() }]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [location.search]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message.trim()) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="outerContainer">
      <div className="shell">
        <TextContainer users={users} room={room} name={name} />
        <div className="chatPanel">
          <InfoBar room={room} count={users.length} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
