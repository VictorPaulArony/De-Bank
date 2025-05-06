import React from 'react';
import useWalletConnect from '../hooks/useWalletConnect';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/theme.css';

function Header({ onMenuClick }) {
  const { account } = useWalletConnect();

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-left">
        <button
          onClick={onMenuClick}
          className="menu-toggle"
        >
          <span className="menu-icon">☰</span>
        </button>
        <h2>DeBenk</h2>
      </div>

      <div className="header-right">
        <button 
          onClick={toggleTheme} 
          className="header-button theme-toggle"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <span className="icon">{isDarkMode ? '☀️' : '🌙'}</span>
        </button>
        <button className="header-button">
          <span className="icon">🔍</span>
        </button>
        <button className="header-button">
          <span className="icon">🔔</span>
        </button>
        <div className="wallet-display">
          <span className="wallet-icon">👛</span>
          <span className="wallet-address">
            {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Not Connected'}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;