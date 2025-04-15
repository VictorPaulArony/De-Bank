import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard-components.css';

const DashHome = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 'money-market',
      title: 'Money Market Funds',
      description: 'Invest in the money market funds',
      icon: '💰',
      stats: [
        { label: 'Total Invested', value: '$10,000' },
        { label: 'Current Returns', value: '+15%', positive: true }
      ],
      action: () => navigate('/lending')
    },
    {
      id: 'borrow',
      title: 'Borrow Loan',
      description: 'Borrow from money market funds',
      icon: '🏦',
      stats: [
        { label: 'Available Credit', value: '$25,000' },
        { label: 'Current Rate', value: '3.5%' }
      ],
      action: () => navigate('/borrowing')
    },
    {
      id: 'assets',
      title: 'Manage Crypto Assets',
      description: 'Lock and manage crypto assets',
      icon: '🔐',
      stats: [
        { label: 'Total Assets', value: '$15,000' },
        { label: 'Locked Value', value: '$5,000' }
      ],
      action: () => navigate('/asset-lock')
    },
    {
      id: 'groups',
      title: 'Investment Groups',
      description: 'Join or create investment groups',
      icon: '👥',
      stats: [
        { label: 'Active Groups', value: '3' },
        { label: 'Total Members', value: '12' }
      ],
      action: () => navigate('/merry-go-round')
    }
  ];

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Welcome to DeBenk</h1>
        <p>Manage your crypto assets and investments in one place</p>
      </div>

      <div className="dashboard-grid">
        {cards.map(card => (
          <div key={card.id} className="dashboard-card">
            <div className="card-header">
              <div className="card-icon">{card.icon}</div>
              <h2 className="card-title">{card.title}</h2>
            </div>
            
            <p className="card-description">{card.description}</p>
            
            <div className="card-stats">
              {card.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-label">{stat.label}</div>
                  <div className={`stat-value ${stat.positive ? 'positive' : ''}`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="dashboard-button" 
              onClick={card.action}
            >
              Get Started
            </button>
          </div>
        ))}

        <div className="dashboard-card wide">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <h2 className="card-title">Recent Transactions</h2>
          </div>
          
          <div className="dashboard-list">
            {[
              { type: 'Deposit', amount: '+$1,000', time: '2 hours ago' },
              { type: 'Withdrawal', amount: '-$500', time: '1 day ago' },
              { type: 'Investment', amount: '+$2,000', time: '3 days ago' }
            ].map((tx, index) => (
              <div key={index} className="list-item">
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

export default DashHome;