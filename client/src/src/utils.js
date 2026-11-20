// Gives every person a consistent colour based on their name
export const avatarColor = (name = '') => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return `hsl(${Math.abs(hash) % 360}, 55%, 42%)`;
};

export const initial = (name = '') => (name.trim()[0] || '?').toUpperCase();

export const formatTime = (time) =>
  time ? new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
