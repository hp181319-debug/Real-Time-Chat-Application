import React from 'react';
import ReactEmoji from 'react-emoji';

import { avatarColor, initial, formatTime } from '../../../utils';

import './Message.css';

const Message = ({ message: { text, user, time }, name, showSender }) => {
  const sender = (user || '').toLowerCase();
  const me = (name || '').trim().toLowerCase();

  // Join / leave notices from the server
  if (sender === 'admin') {
    return (
      <div className="systemRow">
        <span className="systemMsg">{text}</span>
      </div>
    );
  }

  const mine = sender === me;

  return (
    <div className={`messageRow ${mine ? 'mine' : 'theirs'} ${showSender ? 'groupStart' : ''}`}>
      {!mine && (
        <div
          className="msgAvatar"
          style={{ background: avatarColor(user), visibility: showSender ? 'visible' : 'hidden' }}
        >
          {initial(user)}
        </div>
      )}
      <div className={`bubble ${mine ? 'bubbleMine' : 'bubbleTheirs'} ${showSender ? 'hasTail' : ''}`}>
        {!mine && showSender && (
          <span className="senderName" style={{ color: avatarColor(user) }}>{user}</span>
        )}
        <span className="bubbleText">{ReactEmoji.emojify(text)}</span>
        <span className="bubbleTime">{formatTime(time)}</span>
      </div>
    </div>
  );
};

export default Message;
