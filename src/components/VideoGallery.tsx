import React, { useState, useRef, useEffect } from 'react';
import VideoGrid from '../components/VideoGrid';

// Instead of generating, define each video as a separate object in an array
const allVideos = [
  {
    id: '1',
    title: 'How to Build a Modern Web App',
    picture: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    videoCode: 'abc123',
    company: 'Web Dev Simplified',
    description: 'A deep dive into building modern web apps with best practices.',
    market: 'Cloud Security'
  },
  {
    id: '2',
    title: 'React vs Vue: The Ultimate Comparison',
    picture: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    videoCode: 'def456',
    company: 'Code Review',
    description: 'Comparing React and Vue for frontend development in 2025.',
    market: 'Zero Trust'
  },
  {
    id: '3',
    title: '10 CSS Tricks You Need to Know',
    picture: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    videoCode: 'ghi789',
    company: 'DesignCourse',
    description: 'Ten essential CSS tricks for every developer.',
    market: 'Threat Intelligence'
  },
  {
    id: '4',
    title: 'Deploying with Docker in 2025',
    picture: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    videoCode: 'jkl012',
    company: 'DevOps Academy',
    description: 'How to deploy your apps with Docker in the coming year.',
    market: 'DevOps'
  },
  {
    id: '5',
    title: 'Astro + React: The Perfect Combo',
    picture: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80',
    videoCode: 'mno345',
    company: 'Frontend Mastery',
    description: 'Why Astro and React are a perfect combination for fast sites.',
    market: 'Web3'
  },
  {
    id: '6',
    title: 'Understanding TypeScript in 10 Minutes',
    picture: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    videoCode: 'pqr678',
    company: 'TS Guru',
    description: 'Quickly understand TypeScript and its benefits.',
    market: 'AI/ML'
  },
  {
    id: '7',
    title: 'Next.js vs Astro: 2025 Edition',
    picture: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    videoCode: 'stu901',
    company: 'NextGen Devs',
    description: 'A look at Next.js and Astro for modern web projects.',
    market: 'Mobile Security'
  },
  {
    id: '8',
    title: 'Mastering Flexbox',
    picture: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    videoCode: 'vwx234',
    company: 'CSS Wizardry',
    description: 'Master CSS Flexbox for responsive layouts.',
    market: 'Network'
  },
  {
    id: '9',
    title: 'JavaScript Async Deep Dive',
    picture: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    videoCode: 'yz5678',
    company: 'Async Pros',
    description: 'Async JavaScript explained with real-world examples.',
    market: 'Compliance'
  },
  {
    id: '10',
    title: 'UI/UX Trends for Developers',
    picture: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80',
    videoCode: 'qazwsx',
    company: 'UX Studio',
    description: 'UI/UX trends every developer should know.',
    market: 'Data Privacy'
  },
  {
    id: '11',
    title: 'Building REST APIs with Node.js',
    picture: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    videoCode: 'restapi001',
    company: 'Node Masters',
    description: 'A practical guide to building RESTful APIs using Node.js.',
    market: 'AppSec'
  },
  {
    id: '12',
    title: 'GraphQL vs REST: What to Choose?',
    picture: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    videoCode: 'graphql002',
    company: 'API Insights',
    description: 'Comparing GraphQL and REST for modern API development.',
    market: 'IoT'
  },
  {
    id: '13',
    title: 'State Management in React',
    picture: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    videoCode: 'state003',
    company: 'React Academy',
    description: 'Understanding state management patterns in React.',
    market: 'Cloud Security'
  },
  {
    id: '14',
    title: 'Intro to Svelte',
    picture: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    videoCode: 'svelte004',
    company: 'Frontend Future',
    description: 'A beginner-friendly introduction to Svelte.',
    market: 'Zero Trust'
  },
  {
    id: '15',
    title: 'Debugging JavaScript Like a Pro',
    picture: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    videoCode: 'debug005',
    company: 'JS Debuggers',
    description: 'Tips and tricks for debugging JavaScript applications.',
    market: 'Threat Intelligence'
  },
  {
    id: '16',
    title: 'Responsive Design Best Practices',
    picture: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80',
    videoCode: 'responsive006',
    company: 'CSS Wizardry',
    description: 'How to make your web apps look great on any device.',
    market: 'Identity'
  },
  {
    id: '17',
    title: 'Serverless Functions Explained',
    picture: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    videoCode: 'serverless007',
    company: 'Cloud Devs',
    description: 'What are serverless functions and when should you use them?',
    market: 'DevOps'
  },
  {
    id: '18',
    title: 'Getting Started with Tailwind CSS',
    picture: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    videoCode: 'tailwind008',
    company: 'DesignCourse',
    description: 'A quick start guide to using Tailwind CSS in your projects.',
    market: 'Web3'
  },
  {
    id: '19',
    title: 'Accessibility for Web Developers',
    picture: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    videoCode: 'a11y009',
    company: 'Web Dev Simplified',
    description: 'Making your websites accessible to everyone.',
    market: 'AI/ML'
  },
  {
    id: '20',
    title: 'Intro to WebAssembly',
    picture: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    videoCode: 'wasm010',
    company: 'NextGen Devs',
    description: 'What is WebAssembly and how can you use it?',
    market: 'Mobile Security'
  },
  {
    id: '21',
    title: 'Building a Design System',
    picture: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    videoCode: 'designsys011',
    company: 'UX Studio',
    description: 'How to create and maintain a scalable design system.',
    market: 'Network'
  },
  {
    id: '22',
    title: 'Unit Testing in JavaScript',
    picture: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    videoCode: 'unittest012',
    company: 'Test Driven',
    description: 'A practical guide to unit testing in JavaScript.',
    market: 'Compliance'
  },
  {
    id: '23',
    title: 'The Power of CSS Grid',
    picture: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    videoCode: 'cssgrid013',
    company: 'CSS Wizardry',
    description: 'Mastering CSS Grid for advanced layouts.',
    market: 'Data Privacy'
  },
  {
    id: '24',
    title: 'Deploying to Vercel & Netlify',
    picture: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    videoCode: 'deploy014',
    company: 'DevOps Academy',
    description: 'How to deploy your sites to Vercel and Netlify.',
    market: 'AppSec'
  },
  {
    id: '25',
    title: 'Intro to Astro Islands',
    picture: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    videoCode: 'astroislands015',
    company: 'Frontend Mastery',
    description: 'Understanding Astro Islands architecture.',
    market: 'IoT'
  },
  {
    id: '26',
    title: 'Modern Animation with Framer Motion',
    picture: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    videoCode: 'framer016',
    company: 'DesignCourse',
    description: 'Create beautiful animations with Framer Motion.',
    market: 'Other'
  },
  {
    id: '27',
    title: 'SEO in 2025: What Matters?',
    picture: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    videoCode: 'seo017',
    company: 'Web Dev Simplified',
    description: 'Latest SEO strategies for modern web apps.',
    market: 'Cloud Security'
  },
  {
    id: '28',
    title: 'TypeScript Generics Explained',
    picture: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    videoCode: 'tsgenerics018',
    company: 'TS Guru',
    description: 'How to use generics in TypeScript effectively.',
    market: 'Zero Trust'
  },
  {
    id: '29',
    title: 'Building a Blog with Astro',
    picture: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    videoCode: 'astroblog019',
    company: 'Frontend Mastery',
    description: 'Step-by-step guide to building a blog with Astro.',
    market: 'Threat Intelligence'
  },
  {
    id: '30',
    title: 'Web Performance Optimization',
    picture: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    videoCode: 'perf020',
    company: 'NextGen Devs',
    description: 'Techniques to make your websites blazing fast.',
    market: 'Identity'
  },
];

const INITIAL_COUNT = 12;
const LOAD_COUNT = 8;

const marketSegments = [
  'All',
  'Cloud Security',
  'Zero Trust',
  'Threat Intelligence',
  'Identity',
  'DevOps',
  'Web3',
  'AI/ML',
  'Mobile Security',
  'Network',
  'Compliance',
  'Data Privacy',
  'AppSec',
  'IoT',
  'Other'
];

const ORANGE = '#ff6600'; // From logo

const VideoGallery = () => {
  const [displayed, setDisplayed] = useState(INITIAL_COUNT);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState('All');
  const loader = useRef<HTMLDivElement>(null);

  // Filtered videos for search (unique by title)
  const filtered = allVideos.filter((v, idx, arr) => {
    const unique = arr.findIndex(x => x.title === v.title) === idx;
    const matchesSearch =
      v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.company.toLowerCase().includes(search.toLowerCase());
    const matchesMarket =
      selectedMarket === 'All' ||
      (v.market && v.market.toLowerCase().includes(selectedMarket.toLowerCase()));
    return unique && matchesSearch && matchesMarket;
  });

  // Videos to display (infinite scroll for all, full for search/filter)
  const videosToShow = search.trim() === '' && selectedMarket === 'All'
    ? allVideos.slice(0, displayed)
    : filtered;

  // Infinite scroll (only when not searching)
  useEffect(() => {
    if (search.trim() !== '') return; // Only run infinite scroll when not searching
    const handleScroll = () => {
      if (!loader.current || isLoading) return;
      const rect = loader.current.getBoundingClientRect();
      // Use videosToShow.length instead of allVideos.length for correct scroll behavior
      if (rect.top < window.innerHeight + 100 && displayed < allVideos.length) {
        setIsLoading(true);
        setTimeout(() => {
          setDisplayed((prev) => Math.min(prev + LOAD_COUNT, allVideos.length));
          setIsLoading(false);
        }, 700); // Simulate loading delay
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayed, isLoading, search, allVideos.length]);

  // Reset displayed count on search
  useEffect(() => {
    setDisplayed(INITIAL_COUNT);
  }, [search]);

  // Listen for sidebar search events and update search state
  useEffect(() => {
    const handler = (e: any) => setSearch(e.detail || '');
    window.addEventListener('sidebar-search', handler);
    return () => window.removeEventListener('sidebar-search', handler);
  }, []);

  return (
    <>
      {/* Filter bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',// Adjusted for better visibility
        gap: 12,
        justifyContent: 'center',
        margin: '104px 0 24px 0',
        padding: '0 12px',
      }}>
        {marketSegments.map(seg => (
          <button
            key={seg}
            onClick={() => setSelectedMarket(seg)}
            style={{
              background: selectedMarket === seg ? ORANGE : 'rgba(255,255,255,0.08)',
              color: selectedMarket === seg ? '#fff' : ORANGE,
              border: `2px solid ${ORANGE}`,
              borderRadius: 32,
              padding: '8px 22px',
              fontWeight: 700,
              fontSize: '.8rem',
              cursor: 'pointer',
              transition: 'background 0.18s, color 0.18s, box-shadow 0.18s',
              outline: 'none',
              boxShadow: selectedMarket === seg ? '0 4px 16px rgba(255,102,0,0.18)' : 'none',
              marginBottom: 6,
              letterSpacing: '0.01em',
              textTransform: 'capitalize',
              boxSizing: 'border-box',
            }}
          >
            #{seg}
          </button>
        ))}
      </div>
      <VideoGrid videos={videosToShow} />
      <div ref={loader} style={{ height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {isLoading && search.trim() === '' && (
          <div style={{ color: '#aaa', fontSize: 18, marginTop: 8 }}>
            <span className="loader-spinner" style={{
              display: 'inline-block',
              width: 24,
              height: 24,
              border: '3px solid #444',
              borderTop: '3px solid #fff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginRight: 10
            }} />
            Loading more videos...
          </div>
        )}
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        /* Sticker style for filter bar */
        .market-sticker {
          display: inline-block;
          margin: 0 8px 8px 0;
          padding: 8px 22px;
          border-radius: 32px;
          font-weight: 700;
          font-size: 1.05rem;
          border: 2px solid ${ORANGE};
          background: rgba(255,255,255,0.08);
          color: ${ORANGE};
          cursor: pointer;
          transition: background 0.18s, color 0.18s, box-shadow 0.18s;
          letter-spacing: 0.01em;
          text-transform: capitalize;
        }
        .market-sticker.active {
          background: ${ORANGE};
          color: #fff;
          box-shadow: 0 4px 16px rgba(255,102,0,0.18);
        }
      `}</style>
    </>
  );
};

export default VideoGallery;
