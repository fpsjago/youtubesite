import React, { useState } from 'react';
import Sidebar from './Sidebar';
import VideoGallery from './VideoGallery';

const MainPage: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="main-wrapper" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div className="main-content" style={{ flex: 1 }}>
        <form className="main-search" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
        <VideoGallery />
      </div>
    </div>
  );
};

export default MainPage;
