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
      {videos.map((video, idx) => (
        <div
          key={video.id}
          style={{
            animation: onVideoClick ? 'fadeInUp 0.6s cubic-bezier(0.4,0,0.2,1) both' : undefined,
            animationDelay: `${idx * 0.04}s`,
            willChange: 'opacity, transform',
          }}
        >
          <VideoCard
            title={video.title}
            thumbnail={video.picture}
            channel={video.company}
            views={video.videoCode}
            date={video.description}
            onClick={onVideoClick ? () => onVideoClick(video.id) : undefined}
          />
        </div>
      ))}
    </div>
  </div>
);

export default VideoGrid;
