import React, { useState } from 'react';

const menuItems = [
  { icon: '🏠', label: 'Home' },
  { icon: '🔥', label: 'Trending' },
  { icon: '📺', label: 'Subscriptions' },
  { icon: '🕒', label: 'History' },
  { icon: '👍', label: 'Liked Videos' },
  { icon: '📝', label: 'Playlists' },
  { icon: '⚙️', label: 'Settings' },
  { icon: '❓', label: 'Help' },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="sidebar-header">
        <div className="top-logo-page">
            <div className="hamburget-button-container">
                <button
                  className="sidebar-hamburger"
                  aria-label="Toggle sidebar"
                  onClick={() => setOpen((o) => !o)}
                >
                  <span className="hamburger-bar" />
                  <span className="hamburger-bar" />
                  <span className="hamburger-bar" />
                </button>

</div>
      <img src="https://aicybersecurityforum.com/AI-register/images/CYBERSYMPOSIUMS-logo-orange-white.png" alt="" />            
             
        </div>
        <form className="sidebar-search" id="sidebar-search-form" onSubmit={e => e.preventDefault()}>
          <input
            id="sidebar-search-input"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              if (typeof window !== 'undefined') {
                const event = new CustomEvent('sidebar-search', { detail: e.target.value });
                window.dispatchEvent(event);
              }
            }}
          />
        </form>
      </div>
      <aside className={`sidebar${open ? '' : ' sidebar-closed'}`}>
        <nav>
          <ul>
            {menuItems.map((item, idx) => (
              <li key={idx} className="sidebar-item">
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
