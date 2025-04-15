// src/components/Dashboard.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Shared/Sidebar';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

// Import styles
import '../styles/layout.css';
import '../styles/sidebar.css';
import '../styles/header.css';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-layout">
      <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
      </div>
      <div className="main-container">
        <Header onMenuClick={toggleSidebar} />
        <div className="content-wrapper">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;