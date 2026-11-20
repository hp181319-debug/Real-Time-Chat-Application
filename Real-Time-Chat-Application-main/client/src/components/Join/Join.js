import React, { useState } from 'react';

import './Join.css';

export default function Join({ history }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !room.trim()) return;
    history.push(`/chat?name=${encodeURIComponent(name.trim())}&room=${encodeURIComponent(room.trim())}`);
  };

  return (
    <div className="joinOuterContainer">
      <form className="joinCard" onSubmit={handleSubmit}>
        <div className="joinLogo" role="img" aria-label="chat">💬</div>
        <h1 className="joinTitle">Realtime Chat</h1>
        <p className="joinSubtitle">Enter your name and a room to start chatting</p>

        <label className="joinLabel">Your name</label>
        <input
          className="joinInput"
          type="text"
          placeholder="e.g. Hardik"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="joinLabel">Room</label>
        <input
          className="joinInput"
          type="text"
          placeholder="e.g. friends"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        <button className="joinButton" type="submit" disabled={!name.trim() || !room.trim()}>
          Join chat
        </button>
      </form>
    </div>
  );
}
