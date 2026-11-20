import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form" onSubmit={sendMessage}>
    <input
      className="input"
      type="text"
      placeholder="Type a message"
      autoComplete="off"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
    />
    <button className="sendButton" type="submit" disabled={!message.trim()} aria-label="Send">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
    </button>
  </form>
);

export default Input;
