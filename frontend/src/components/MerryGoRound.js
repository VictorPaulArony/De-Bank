import React, { useState } from 'react';
import '../styles/dashboard-components.css';

const MerryGoRound = () => {
  const [selectedTab, setSelectedTab] = useState('groups');
  const [groupName, setGroupName] = useState('');
  const [memberAddress, setMemberAddress] = useState('');
  const [contributionAmount, setContributionAmount] = useState('');

  const stats = [
    { label: 'Total Groups', value: '3', subValue: '25 Members' },
    { label: 'Total Contributions', value: '150.5 ETH', subValue: '$248,325' },
    { label: 'Your Groups', value: '2', subValue: 'Active Member' },
    { label: 'Next Payout', value: '5.0 ETH', subValue: 'In 3 days' }
  ];

  const groups = [
    {
      id: 1,
      name: 'Tech Innovators',
      members: 8,
      totalPool: '80.0 ETH',
      cycleAmount: '10.0 ETH',
      nextPayout: '2025-04-17',
      nextMember: '0x1234...5678',
      status: 'active'
    },
    {
      id: 2,
      name: 'Crypto Savers',
      members: 12,
      totalPool: '60.0 ETH',
      cycleAmount: '5.0 ETH',
      nextPayout: '2025-04-20',
      nextMember: '0x8765...4321',
      status: 'active'
    }
  ];

  const contributions = [
    {
      id: 1,
      group: 'Tech Innovators',
      amount: '2.5 ETH',
      date: '2025-04-10',
      status: 'confirmed'
    },
    {
      id: 2,
      group: 'Crypto Savers',
      amount: '1.0 ETH',
      date: '2025-04-12',
      status: 'pending'
    }
  ];

  const createGroup = () => {
    alert(`Creating group: ${groupName}`);
  };

  const addMember = () => {
    alert(`Adding member: ${memberAddress}`);
  };

  const contribute = () => {
    alert(`Contributing: ${contributionAmount} ETH`);
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Merry-Go-Round Groups</h1>
        <p>Manage your group savings and contributions</p>
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

        {/* Tab Selection */}
        <div className="dashboard-card wide">
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <button 
              className={`dashboard-button ${selectedTab === 'groups' ? '' : 'outline'}`}
              onClick={() => setSelectedTab('groups')}
            >
              My Groups
            </button>
            <button 
              className={`dashboard-button ${selectedTab === 'create' ? '' : 'outline'}`}
              onClick={() => setSelectedTab('create')}
            >
              Create Group
            </button>
            <button 
              className={`dashboard-button ${selectedTab === 'contribute' ? '' : 'outline'}`}
              onClick={() => setSelectedTab('contribute')}
            >
              Contribute
            </button>
          </div>

          {selectedTab === 'create' && (
            <div className="dashboard-form-group">
              <label className="dashboard-label">Group Name</label>
              <input
                type="text"
                className="dashboard-input"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Enter group name"
              />
              <label className="dashboard-label" style={{ marginTop: '1rem' }}>Member Address</label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input
                  type="text"
                  className="dashboard-input"
                  value={memberAddress}
                  onChange={(e) => setMemberAddress(e.target.value)}
                  placeholder="Enter member's wallet address"
                />
                <button 
                  className="dashboard-button secondary"
                  onClick={addMember}
                  disabled={!memberAddress}
                >
                  Add
                </button>
              </div>
              <button 
                className="dashboard-button" 
                onClick={createGroup}
                style={{ marginTop: '1rem' }}
                disabled={!groupName}
              >
                Create Group
              </button>
            </div>
          )}

          {selectedTab === 'contribute' && (
            <div className="dashboard-form-group">
              <label className="dashboard-label">Contribution Amount (ETH)</label>
              <input
                type="number"
                className="dashboard-input"
                value={contributionAmount}
                onChange={(e) => setContributionAmount(e.target.value)}
                placeholder="Enter contribution amount"
              />
              <button 
                className="dashboard-button" 
                onClick={contribute}
                style={{ marginTop: '1rem' }}
                disabled={!contributionAmount}
              >
                Make Contribution
              </button>
            </div>
          )}
        </div>

        {/* Active Groups */}
        <div className="dashboard-card wide">
          <div className="card-header">
            <div className="card-icon">👥</div>
            <h2 className="card-title">Active Groups</h2>
          </div>

          <div className="dashboard-list">
            {groups.map(group => (
              <div key={group.id} className="list-item">
                <div className="list-item-icon">💰</div>
                <div className="list-item-content">
                  <div className="list-item-title">{group.name}</div>
                  <div className="list-item-subtitle">
                    {group.members} Members | Next: {group.nextPayout}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="stat-value">{group.totalPool}</div>
                  <div className="list-item-subtitle">
                    Cycle: {group.cycleAmount}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {groups.length === 0 && (
            <div style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
              No active groups
            </div>
          )}
        </div>

        {/* Recent Contributions */}
        <div className="dashboard-card wide">
          <div className="card-header">
            <div className="card-icon">📝</div>
            <h2 className="card-title">Recent Contributions</h2>
          </div>

          <div className="dashboard-list">
            {contributions.map(contribution => (
              <div key={contribution.id} className="list-item">
                <div className="list-item-icon">💸</div>
                <div className="list-item-content">
                  <div className="list-item-title">{contribution.group}</div>
                  <div className="list-item-subtitle">
                    Date: {contribution.date}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="stat-value">{contribution.amount}</div>
                  <div className={`list-item-subtitle ${
                    contribution.status === 'confirmed' ? 'positive' : ''
                  }`}>
                    {contribution.status.charAt(0).toUpperCase() + contribution.status.slice(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {contributions.length === 0 && (
            <div style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
              No recent contributions
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MerryGoRound;