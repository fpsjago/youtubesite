import React from 'react';

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
  const [open, setOpen] = React.useState(false); // Default to closed
  const [search, setSearch] = React.useState('');

  // Add effect to update main-content margin when sidebar is toggled
  React.useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.marginLeft = open ? '220px' : '56px';
    }
  }, [open]);

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
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div className="sidebar-search" id="sidebar-search-form">
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
            <span className="search-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ff6600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
          </div>
        </div>
      </div>
      <aside className={`sidebar${open ? '' : ' sidebar-closed'}`}> 
        <nav>
          <ul>
            {menuItems.map((item, idx) => (
              <li key={idx} className="sidebar-item">
                <span className="sidebar-icon">{item.icon}</span>
                {open && <span className="sidebar-label">{item.label}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
