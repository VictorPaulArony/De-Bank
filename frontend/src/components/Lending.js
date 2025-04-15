import React, { useState } from 'react';
import useWalletConnect from '../hooks/useWalletConnect';
import '../styles/dashboard-components.css';

const Lending = () => {
  const { account, connectWallet } = useWalletConnect();
  const [amount, setAmount] = useState('');
  const [selectedPool, setSelectedPool] = useState('eth');

  const pools = [
    { id: 'eth', name: 'Ethereum', apy: '4.5%', tvl: '$2.5M', icon: '💰' },
    { id: 'usdc', name: 'USDC', apy: '8.2%', tvl: '$5.1M', icon: '💲' },
    { id: 'dai', name: 'DAI', apy: '7.8%', tvl: '$3.2M', icon: '💳' }
  ];

  const userPositions = [
    { pool: 'Ethereum', amount: '2.5 ETH', value: '$4,125', earnings: '+$180' },
    { pool: 'USDC', amount: '5000 USDC', value: '$5,000', earnings: '+$410' }
  ];

  const depositFunds = async () => {
    if (!account) {
      connectWallet();
      return;
    }
    // Simulate deposit logic here
    alert(`Deposited ${amount} into ${selectedPool.toUpperCase()} pool`);
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Lending Pools</h1>
        <p>Earn interest by providing liquidity to lending pools</p>
      </div>

      <div className="dashboard-grid">
        {/* Available Pools */}
        {pools.map(pool => (
          <div 
            key={pool.id} 
            className={`dashboard-card ${selectedPool === pool.id ? 'selected' : ''}`}
            onClick={() => setSelectedPool(pool.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-header">
              <div className="card-icon">{pool.icon}</div>
              <h2 className="card-title">{pool.name} Pool</h2>
            </div>

            <div className="card-stats">
              <div className="stat-item">
                <div className="stat-label">APY</div>
                <div className="stat-value positive">{pool.apy}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Total Value Locked</div>
                <div className="stat-value">{pool.tvl}</div>
              </div>
            </div>

            <button 
              className={`dashboard-button ${selectedPool === pool.id ? '' : 'outline'}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPool(pool.id);
              }}
            >
              {selectedPool === pool.id ? 'Selected' : 'Select Pool'}
            </button>
          </div>
        ))}

        {/* Deposit Form */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">💸</div>
            <h2 className="card-title">Deposit Funds</h2>
          </div>

          <div className="dashboard-form-group">
            <label className="dashboard-label">Amount</label>
            <input
              type="number"
              className="dashboard-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={`Enter amount in ${selectedPool.toUpperCase()}`}
            />
          </div>

          <button 
            className="dashboard-button" 
            onClick={depositFunds}
            disabled={!amount || !selectedPool}
          >
            {account ? 'Deposit Funds' : 'Connect Wallet'}
          </button>
        </div>

        {/* User Positions */}
        <div className="dashboard-card wide">
          <div className="card-header">
            <div className="card-icon">📈</div>
            <h2 className="card-title">Your Lending Positions</h2>
          </div>

          <div className="dashboard-list">
            {userPositions.map((position, index) => (
              <div key={index} className="list-item">
                <div className="list-item-icon">💰</div>
                <div className="list-item-content">
                  <div className="list-item-title">{position.pool}</div>
                  <div className="list-item-subtitle">{position.amount}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="stat-value">{position.value}</div>
                  <div className="stat-value positive" style={{ fontSize: '0.875rem' }}>
                    {position.earnings}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {userPositions.length === 0 && (
            <div style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
              No active lending positions
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lending;