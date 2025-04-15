import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard-components.css';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Sample data - in a real app, this would come from props or API
  const userData = {
    username: "Victor Arony",
    walletAddress: "0x1234...5678",
    email: "victorpaularony@gmail.com",
    balance: "100.00",
    transactions: [
      { id: 1, type: "Deposit", amount: "+2.5 ETH", time: "2 hours ago", status: "completed" },
      { id: 2, type: "Withdrawal", amount: "-1.0 ETH", time: "1 day ago", status: "completed" },
      { id: 3, type: "Investment", amount: "+5.0 ETH", time: "3 days ago", status: "completed" },
      { id: 4, type: "Deposit", amount: "+1.5 ETH", time: "1 week ago", status: "completed" }
    ],
    stats: [
      { label: 'Total Balance', value: '108.5 ETH' },
      { label: 'Total Transactions', value: '24' },
      { label: 'Member Since', value: 'Jan 2024' }
    ]
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Profile Settings</h1>
        <p>Manage your account and view your transaction history</p>
      </div>

      <div className="dashboard-grid">
        {/* Profile Card */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">👤</div>
            <h2 className="card-title">Personal Information</h2>
          </div>

          {isEditing ? (
            <div className="dashboard-form-group">
              <label className="dashboard-label">Username</label>
              <input 
                type="text" 
                className="dashboard-input" 
                defaultValue={userData.username} 
              />
              <label className="dashboard-label" style={{ marginTop: '1rem' }}>Email</label>
              <input 
                type="email" 
                className="dashboard-input" 
                defaultValue={userData.email} 
              />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button 
                  className="dashboard-button" 
                  onClick={() => setIsEditing(false)}
                >
                  Save Changes
                </button>
                <button 
                  className="dashboard-button outline" 
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="card-stats">
                <div className="stat-item">
                  <div className="stat-label">Username</div>
                  <div className="stat-value">{userData.username}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Email</div>
                  <div className="stat-value">{userData.email}</div>
                </div>
              </div>
              <button 
                className="dashboard-button outline" 
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>

        {/* Wallet Card */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">💰</div>
            <h2 className="card-title">Wallet Information</h2>
          </div>

          <div className="card-stats">
            {userData.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
              </div>
            ))}
          </div>

          <button 
            className="dashboard-button outline" 
            onClick={() => navigate('/wallet')}
          >
            Manage Wallet
          </button>
        </div>

        {/* Transactions Card */}
        <div className="dashboard-card wide">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <h2 className="card-title">Recent Transactions</h2>
          </div>

          <div className="dashboard-list">
            {userData.transactions.map(tx => (
              <div key={tx.id} className="list-item">
                <div className="list-item-icon">
                  {tx.type === 'Deposit' ? '↓' : tx.type === 'Withdrawal' ? '↑' : '💱'}
                </div>
                <div className="list-item-content">
                  <div className="list-item-title">{tx.type}</div>
                  <div className="list-item-subtitle">{tx.time}</div>
                </div>
                <div className={`stat-value ${tx.amount.startsWith('+') ? 'positive' : 'negative'}`}>
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>

          <button 
            className="dashboard-button secondary" 
            style={{ marginTop: '1rem', width: '100%' }}
            onClick={() => navigate('/transactions')}
          >
            View All Transactions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;