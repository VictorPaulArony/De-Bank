import React, { useState } from 'react';
import useWalletConnect from '../hooks/useWalletConnect';
import '../styles/dashboard-components.css';

const Borrowing = () => {
  const { account, connectWallet } = useWalletConnect();
  const [amount, setAmount] = useState('');
  const [selectedAsset, setSelectedAsset] = useState('eth');
  const [collateral, setCollateral] = useState('');

  const borrowingAssets = [
    { id: 'eth', name: 'Ethereum', rate: '3.5%', available: '150 ETH', icon: '💰' },
    { id: 'usdc', name: 'USDC', rate: '5.2%', available: '500,000 USDC', icon: '💲' },
    { id: 'dai', name: 'DAI', rate: '4.8%', available: '250,000 DAI', icon: '💳' }
  ];

  const userLoans = [
    { asset: 'Ethereum', borrowed: '5 ETH', value: '$8,250', collateral: '10 ETH' },
    { asset: 'USDC', borrowed: '10,000 USDC', value: '$10,000', collateral: '8 ETH' }
  ];

  const borrowFunds = async () => {
    if (!account) {
      connectWallet();
      return;
    }
    // Simulate borrowing logic here
    alert(`Borrowed ${amount} ${selectedAsset.toUpperCase()} with ${collateral} ETH as collateral`);
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Borrow Assets</h1>
        <p>Borrow crypto assets using your collateral</p>
      </div>

      <div className="dashboard-grid">
        {/* Available Assets */}
        {borrowingAssets.map(asset => (
          <div 
            key={asset.id} 
            className={`dashboard-card ${selectedAsset === asset.id ? 'selected' : ''}`}
            onClick={() => setSelectedAsset(asset.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-header">
              <div className="card-icon">{asset.icon}</div>
              <h2 className="card-title">{asset.name}</h2>
            </div>

            <div className="card-stats">
              <div className="stat-item">
                <div className="stat-label">Interest Rate</div>
                <div className="stat-value">{asset.rate}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Available to Borrow</div>
                <div className="stat-value">{asset.available}</div>
              </div>
            </div>

            <button 
              className={`dashboard-button ${selectedAsset === asset.id ? '' : 'outline'}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedAsset(asset.id);
              }}
            >
              {selectedAsset === asset.id ? 'Selected' : 'Select Asset'}
            </button>
          </div>
        ))}

        {/* Borrow Form */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">💵</div>
            <h2 className="card-title">Borrow {selectedAsset.toUpperCase()}</h2>
          </div>

          <div className="dashboard-form-group">
            <label className="dashboard-label">Borrow Amount</label>
            <input
              type="number"
              className="dashboard-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={`Enter amount in ${selectedAsset.toUpperCase()}`}
            />
          </div>

          <div className="dashboard-form-group">
            <label className="dashboard-label">Collateral Amount (ETH)</label>
            <input
              type="number"
              className="dashboard-input"
              value={collateral}
              onChange={(e) => setCollateral(e.target.value)}
              placeholder="Enter collateral amount"
            />
          </div>

          <button 
            className="dashboard-button" 
            onClick={borrowFunds}
            disabled={!amount || !collateral || !selectedAsset}
          >
            {account ? 'Borrow Funds' : 'Connect Wallet'}
          </button>
        </div>

        {/* Active Loans */}
        <div className="dashboard-card wide">
          <div className="card-header">
            <div className="card-icon">💴</div>
            <h2 className="card-title">Your Active Loans</h2>
          </div>

          <div className="dashboard-list">
            {userLoans.map((loan, index) => (
              <div key={index} className="list-item">
                <div className="list-item-icon">💰</div>
                <div className="list-item-content">
                  <div className="list-item-title">{loan.asset}</div>
                  <div className="list-item-subtitle">Borrowed: {loan.borrowed}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="stat-value">{loan.value}</div>
                  <div className="list-item-subtitle">Collateral: {loan.collateral}</div>
                </div>
              </div>
            ))}
          </div>

          {userLoans.length === 0 && (
            <div style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
              No active loans
            </div>
          )}

          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>
              Total Borrowed Value
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
              $18,250
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Borrowing;