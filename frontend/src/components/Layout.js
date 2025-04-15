import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Sidebar from '../Shared/Sidebar';
import '../styles/layout.css';

const Layout = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsSidebarOpen(true);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside on mobile
  const handleMainClick = (e) => {
    if (isMobile && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (isMobile && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="layout">
      <Header onMenuClick={toggleSidebar} />
      <div className="layout-container" onClick={handleOverlayClick}>
        <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <main className="main-container" onClick={handleMainClick}>
          <div className="content-wrapper">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
