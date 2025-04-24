// src/Shared/Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useWalletConnect from '../hooks/useWalletConnect';

const Sidebar = ({activeTab, setActiveTab}) => {
  const navigate = useNavigate();
  const {account, disconnectWallet} = useWalletConnect();

  const handleDisconnect = () => {
    disconnectWallet();
    navigate('/wallet-connection');
  };

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/dashboard/wallet', icon: '💰', label: 'Wallet' },
    { path: '/dashboard/merry-go-round', icon: '👥', label: 'Groups' },
    { path: '/dashboard/asset-lock', icon: '🔒', label: 'Lock Asset' },
    { path: '/dashboard/lending', icon: '💹', label: 'MMF' },
    { path: '/dashboard/transactions', icon: '📝', label: 'Transactions' },
    { path: '/dashboard/borrowing', icon: '💸', label: 'Borrow' },
    { path: '/dashboard/profile', icon: '👤', label: 'Profile' },
    { path: '/dashboard/faq', icon: '❓', label: 'Get Help' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">DeBenk</div>
      
      {menuItems.map((item) => {
        const isActive = activeTab === item.label.toLowerCase();
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab(item.label.toLowerCase())}
          >
            <span className="nav-item-icon">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}

      <div className="sidebar-footer">
        <div className="wallet-info">
          <span className="nav-item-icon">👛</span>
          <span className="wallet-address">
            {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Not Connected'}
          </span>
        </div>
        <button
          className="disconnect-button"
          onClick={handleDisconnect}
        >
          <span className="nav-item-icon">🔌</span>
          Disconnect Wallet
        </button>
        <div className="logout" onClick={() => navigate('/')}>
          <span className="nav-item-icon">🚪</span>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;