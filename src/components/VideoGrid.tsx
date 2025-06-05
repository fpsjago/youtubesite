import React from 'react';
import VideoCard from './VideoCard';

interface Video {
  id: string;
  title: string;
  picture: string;
  videoCode: string;
  company: string;
  description: string;
}

interface VideoGridProps {
  videos: Video[];
  onVideoClick?: (id: string) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onVideoClick }) => (
  <div className="video-grid">
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gap: '32px',
      padding: '24px 0',
      maxWidth: '100%',
      width: '100%',
    }}>
      {videos.map(video => (
        <VideoCard
          key={video.id}
          title={video.title}
          thumbnail={video.picture}
          channel={video.company}
          views={video.videoCode}
          date={video.description}
          onClick={onVideoClick ? () => onVideoClick(video.id) : undefined}
        />
      ))}
    </div>
  </div>
);

export default VideoGrid;
