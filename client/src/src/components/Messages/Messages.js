import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.length === 0 && (
      <div className="emptyState">No messages yet. Say hello! 👋</div>
    )}
    {messages.map((message, i) => {
      const prev = messages[i - 1];
      // Only show the sender's name on the first message of a run
      const showSender = !prev || prev.user !== message.user;
      return <Message key={i} message={message} name={name} showSender={showSender} />;
    })}
  </ScrollToBottom>
);

export default Messages;
