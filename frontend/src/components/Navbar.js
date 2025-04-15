import React from 'react';
// import '../styles/navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'lending', label: 'Lending' },
    { id: 'borrowing', label: 'Borrowing' },
    { id: 'wallet', label: 'Wallet' },
    { id: 'merrygoround', label: 'Merry Go Round' },
    { id: 'assetlocker', label: 'Asset Locker' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>DeBank</h1>
      </div>
      <div className="navbar-menu">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`navbar-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;
