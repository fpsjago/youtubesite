import React from 'react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  channel: string;
  views: string;
  date: string;
  onClick?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, channel, views, date, onClick }) => (
  <div className="video-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
    <img src={thumbnail} alt={title} className="video-thumbnail" style={{ width: '100%', borderRadius: '8px' }} />
    <div className="video-info" style={{ padding: '8px 0' }}>
      <h3 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>{title}</h3>
      <div style={{ fontSize: '0.9rem', color: '#666' }}>{channel}</div>
      <div style={{ fontSize: '0.8rem', color: '#999' }}>{views} • {date}</div>
    </div>
  </div>
);

export default VideoCard;
