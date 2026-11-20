import React from 'react';

import { avatarColor, initial } from '../../utils';

import './InfoBar.css';

const InfoBar = ({ room, count }) => (
  <div className="infoBar">
    <a className="backLink" href="/" aria-label="Back to join page">&#8592;</a>
    <div className="roomAvatar" style={{ background: avatarColor(room) }}>{initial(room)}</div>
    <div className="roomInfo">
      <h3 className="roomName">{room}</h3>
      <span className="roomStatus">
        {count > 0 ? `${count} online` : 'connecting...'}
      </span>
    </div>
    <a className="leaveButton" href="/">Leave</a>
  </div>
);

export default InfoBar;
