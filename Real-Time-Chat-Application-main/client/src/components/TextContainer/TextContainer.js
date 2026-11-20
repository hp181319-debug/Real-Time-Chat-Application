import React from 'react';

import { avatarColor, initial } from '../../utils';

import './TextContainer.css';

const TextContainer = ({ users, room, name }) => {
  const me = (name || '').trim().toLowerCase();

  return (
    <aside className="sidebar">
      <div className="sidebarHeader">
        <span role="img" aria-label="chat">💬</span> Realtime Chat
      </div>

      <div className="sidebarRoom">
        <span className="sidebarLabel">Room</span>
        <span className="sidebarRoomName">#{room}</span>
      </div>

      <div className="sidebarLabel sidebarPeople">
        People online{users && users.length ? ` · ${users.length}` : ''}
      </div>

      <div className="userList">
        {users && users.map(({ name: userName }) => (
          <div key={userName} className="userItem">
            <div className="userAvatar" style={{ background: avatarColor(userName) }}>
              {initial(userName)}
              <span className="onlineDot" />
            </div>
            <span className="userName">{userName}</span>
            {userName === me && <span className="youTag">You</span>}
          </div>
        ))}
      </div>

      <div className="sidebarFooter">Built with React, Express, Node.js &amp; Socket.IO</div>
    </aside>
  );
};

export default TextContainer;
