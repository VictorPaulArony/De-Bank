import React, { useState } from 'react';
import useTransactions from '../hooks/useTransactions';
import '../styles/dashboard-components.css';

const Transactions = () => {
  const { transactions, loading } = useTransactions();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data - replace with actual data from useTransactions
  const sampleTransactions = [
    { 
      id: 1, 
      type: 'deposit',
      amount: '+2.5 ETH',
      value: '$4,125',
      from: '0x1234...5678',
      to: '0x8765...4321',
      status: 'completed',
      time: '2 hours ago',
      gas: '0.002 ETH'
    },
    { 
      id: 2, 
      type: 'withdraw',
      amount: '-1.0 ETH',
      value: '$1,650',
      from: '0x8765...4321',
      to: '0x2468...1357',
      status: 'completed',
      time: '1 day ago',
      gas: '0.002 ETH'
    },
    { 
      id: 3, 
      type: 'swap',
      amount: '1000 USDC',
      value: '$1,000',
      from: '0x1234...5678',
      to: '0x9876...5432',
      status: 'pending',
      time: '3 days ago',
      gas: '0.003 ETH'
    }
  ];

  const stats = [
    { label: 'Total Transactions', value: '156' },
    { label: 'Total Volume', value: '$45,250' },
    { label: 'Avg. Transaction', value: '$290' },
    { label: 'Gas Spent', value: '0.45 ETH' }
  ];

  if (loading) {
    return (
      <div className="dashboard-content">
        <div className="dashboard-card" style={{ textAlign: 'center', padding: '4rem' }}>
          <div className="card-icon" style={{ margin: '0 auto', marginBottom: '1rem' }}>⏳</div>
          <h2 className="card-title">Loading Transactions...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Transactions History</h1>
        <p>View and track all your transactions</p>
      </div>

      <div className="dashboard-grid">
        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <div key={index} className="dashboard-card">
            <div className="card-stats" style={{ marginBottom: 0 }}>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Filters and Search */}
        <div className="dashboard-card wide">
          <div className="card-header">
            <div className="card-icon">🔍</div>
            <h2 className="card-title">Filter Transactions</h2>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <button 
              className={`dashboard-button ${filter === 'all' ? '' : 'outline'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`dashboard-button ${filter === 'deposits' ? '' : 'outline'}`}
              onClick={() => setFilter('deposits')}
            >
              Deposits
            </button>
            <button 
              className={`dashboard-button ${filter === 'withdrawals' ? '' : 'outline'}`}
              onClick={() => setFilter('withdrawals')}
            >
              Withdrawals
            </button>
            <button 
              className={`dashboard-button ${filter === 'swaps' ? '' : 'outline'}`}
              onClick={() => setFilter('swaps')}
            >
              Swaps
            </button>
          </div>

          <input
            type="text"
            className="dashboard-input"
            placeholder="Search by address or amount..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Transactions List */}
        <div className="dashboard-card wide">
          <div className="card-header">
            <div className="card-icon">📜</div>
            <h2 className="card-title">Recent Transactions</h2>
          </div>

          <div className="dashboard-list">
            {sampleTransactions.map(tx => (
              <div key={tx.id} className="list-item">
                <div className="list-item-icon">
                  {tx.type === 'deposit' ? '↓' : tx.type === 'withdraw' ? '↑' : '🔁'}
                </div>
                <div className="list-item-content">
                  <div className="list-item-title">
                    {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                  </div>
                  <div className="list-item-subtitle">
                    From: {tx.from} → To: {tx.to}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className={`stat-value ${tx.amount.startsWith('+') ? 'positive' : 'negative'}`}>
                    {tx.amount}
                  </div>
                  <div className="list-item-subtitle">{tx.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '1rem', 
            padding: '1rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.5rem'
          }}>
            <div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Gas Fees (Last 30 days)</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>0.45 ETH ($742.50)</div>
            </div>
            <button className="dashboard-button secondary">Export History</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;