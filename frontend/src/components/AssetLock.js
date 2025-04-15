import React, { useState } from 'react';
import '../styles/dashboard-components.css';

const AssetLock = () => {
  const [selectedLockType, setSelectedLockType] = useState('fixed');
  const [fixedAmount, setFixedAmount] = useState('');
  const [fixedDuration, setFixedDuration] = useState('');
  const [tempAmount, setTempAmount] = useState('');
  const [tempDuration, setTempDuration] = useState('');
  const [tempDailyYield, setTempDailyYield] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const stats = [
    { label: 'Total Fixed Lock', value: '100.0 ETH', subValue: '$165,000' },
    { label: 'Total Temp Lock', value: '50.25 ETH', subValue: '$82,912' },
    { label: 'Total Yield Earned', value: '12.5 ETH', subValue: '$20,625' },
    { label: 'Active Locks', value: '5', subValue: '3 Fixed, 2 Temp' }
  ];

  const activeLocks = [
    { 
      id: 1,
      type: 'Fixed',
      amount: '25.0 ETH',
      duration: '90 days',
      startDate: '2024-01-15',
      endDate: '2024-04-14',
      status: 'active'
    },
    { 
      id: 2,
      type: 'Temp',
      amount: '15.5 ETH',
      duration: '30 days',
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      yield: '0.5%/day',
      status: 'active'
    }
  ];

  const lockFixedAsset = async () => {
    alert(`Locked ${fixedAmount} ETH for ${fixedDuration} days in Fixed Lock`);
  };

  const lockTempAsset = async () => {
    alert(`Locked ${tempAmount} ETH for ${tempDuration} days in Temp Lock`);
  };

  const withdrawAsset = async (type) => {
    alert(`Withdrawing ${withdrawAmount} ETH from ${type} Lock`);
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Asset Locker</h1>
        <p>Lock your crypto assets and earn rewards</p>
      </div>

      <div className="dashboard-grid">
        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <div key={index} className="dashboard-card">
            <div className="card-stats" style={{ marginBottom: 0 }}>
              <div className="stat-item">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="list-item-subtitle">{stat.subValue}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Lock Type Selection */}
        <div className="dashboard-card wide">
          <div className="card-header">
            <div className="card-icon">🔒</div>
            <h2 className="card-title">Lock Assets</h2>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <button 
              className={`dashboard-button ${selectedLockType === 'fixed' ? '' : 'outline'}`}
              onClick={() => setSelectedLockType('fixed')}
            >
              Fixed Lock
            </button>
            <button 
              className={`dashboard-button ${selectedLockType === 'temp' ? '' : 'outline'}`}
              onClick={() => setSelectedLockType('temp')}
            >
              Temp Lock
            </button>
          </div>

          {selectedLockType === 'fixed' ? (
            <div className="dashboard-form-group">
              <label className="dashboard-label">Lock Duration (Days)</label>
              <input
                type="number"
                className="dashboard-input"
                value={fixedDuration}
                onChange={(e) => setFixedDuration(e.target.value)}
                placeholder="Enter duration in days"
              />
              <label className="dashboard-label" style={{ marginTop: '1rem' }}>Amount (ETH)</label>
              <input
                type="number"
                className="dashboard-input"
                value={fixedAmount}
                onChange={(e) => setFixedAmount(e.target.value)}
                placeholder="Enter amount to lock"
              />
              <button 
                className="dashboard-button" 
                onClick={lockFixedAsset}
                style={{ marginTop: '1rem' }}
                disabled={!fixedAmount || !fixedDuration}
              >
                Lock Assets
              </button>
            </div>
          ) : (
            <div className="dashboard-form-group">
              <label className="dashboard-label">Lock Duration (Days)</label>
              <input
                type="number"
                className="dashboard-input"
                value={tempDuration}
                onChange={(e) => setTempDuration(e.target.value)}
                placeholder="Enter duration in days"
              />
              <label className="dashboard-label" style={{ marginTop: '1rem' }}>Daily Yield (%)</label>
              <input
                type="number"
                className="dashboard-input"
                value={tempDailyYield}
                onChange={(e) => setTempDailyYield(e.target.value)}
                placeholder="Enter daily yield percentage"
              />
              <label className="dashboard-label" style={{ marginTop: '1rem' }}>Amount (ETH)</label>
              <input
                type="number"
                className="dashboard-input"
                value={tempAmount}
                onChange={(e) => setTempAmount(e.target.value)}
                placeholder="Enter amount to lock"
              />
              <button 
                className="dashboard-button" 
                onClick={lockTempAsset}
                style={{ marginTop: '1rem' }}
                disabled={!tempAmount || !tempDuration || !tempDailyYield}
              >
                Lock Assets
              </button>
            </div>
          )}
        </div>

        {/* Active Locks */}
        <div className="dashboard-card wide">
          <div className="card-header">
            <div className="card-icon">📈</div>
            <h2 className="card-title">Active Locks</h2>
          </div>

          <div className="dashboard-list">
            {activeLocks.map(lock => (
              <div key={lock.id} className="list-item">
                <div className="list-item-icon">
                  {lock.type === 'Fixed' ? '🔐' : '⏳'}
                </div>
                <div className="list-item-content">
                  <div className="list-item-title">{lock.type} Lock</div>
                  <div className="list-item-subtitle">
                    Duration: {lock.duration} ({lock.startDate} - {lock.endDate})
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="stat-value">{lock.amount}</div>
                  {lock.yield && (
                    <div className="list-item-subtitle positive">
                      Yield: {lock.yield}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {activeLocks.length === 0 && (
            <div style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
              No active locks
            </div>
          )}

          {/* Withdraw Section */}
          <div style={{ 
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.5rem'
          }}>
            <div className="dashboard-form-group" style={{ marginBottom: 0 }}>
              <label className="dashboard-label">Withdraw Amount</label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input
                  type="number"
                  className="dashboard-input"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="Enter amount to withdraw"
                />
                <button 
                  className="dashboard-button secondary"
                  onClick={() => withdrawAsset(selectedLockType)}
                  disabled={!withdrawAmount}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetLock;
