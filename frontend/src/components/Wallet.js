// src/components/Wallet.js
import React, { useState } from 'react';
import useWalletConnect from '../hooks/useWalletConnect';

import '../styles/WalletDashboard.css';

const Wallet = () => {
  const { account, connectWallet, disconnectWallet } = useWalletConnect();
  
  const [network, setNetwork] = useState('Ethereum');
  const [currency, setCurrency] = useState('Ethereum');
  const [customNetwork, setCustomNetwork] = useState({
    chainId: '',
    networkName: '',
    rpcUrl: '',
    currencySymbol: '',
    blockExplorerUrl: ''
  });
  const [sendInfo, setSendInfo] = useState({
    recipientAddress: '',
    amount: ''
  });
  
  const balance = '100.00';
  const transactions = [
    { id: 1, type: 'Deposit', date: '05-Mar-2023', time: '09:09', amount: '100.00' },
    { id: 2, type: 'Withdraw', date: '05-Mar-2023', time: '10:15', amount: '-50.00' },
    { id: 3, type: 'Deposit', date: '06-Mar-2023', time: '14:30', amount: '75.00' },
    { id: 4, type: 'Withdraw', date: '07-Mar-2023', time: '11:45', amount: '-25.00' },
    { id: 5, type: 'Deposit', date: '08-Mar-2023', time: '16:20', amount: '200.00' }
  ];

  const handleCustomNetworkChange = (e) => {
    const { name, value } = e.target;
    setCustomNetwork(prev => ({ ...prev, [name]: value }));
  };

  const handleSendInfoChange = (e) => {
    const { name, value } = e.target;
    setSendInfo(prev => ({ ...prev, [name]: value }));
  };

  const addNetwork = () => {
    console.log('Adding network:', customNetwork);
    setCustomNetwork({
      chainId: '',
      networkName: '',
      rpcUrl: '',
      currencySymbol: '',
      blockExplorerUrl: ''
    });
  };

  const sendCrypto = () => {
    console.log('Sending crypto:', sendInfo);
    setSendInfo({
      recipientAddress: '',
      amount: ''
    });
  };

  return (
    <div className="wallet-dashboard">
      <div className="wallet-left-panel">
        <div className="wallet-header">
          <h1>Wallet Dashboard</h1>
          <div className="wallet-address">
            {account ? 
              <>
                <span className="address-label">Connected:</span>
                <span className="address-value">{`${account.slice(0, 6)}...${account.slice(-4)}`}</span>
              </>
              : 
              <button className="connect-wallet-btn" onClick={connectWallet}>
                Connect Wallet
              </button>
            }
          </div>
        </div>

        <div className="wallet-controls">
          <div className="control-section">
            <h2>Network & Currency</h2>
            <div className="control-group">
              <label>Network</label>
              <select 
                value={network} 
                onChange={(e) => setNetwork(e.target.value)}
                className="select-input"
              >
                <option value="Ethereum">Ethereum</option>
                <option value="Polygon">Polygon</option>
                <option value="Binance">Binance Smart Chain</option>
              </select>
            </div>
            
            <div className="control-group">
              <label>Currency</label>
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="select-input"
              >
                <option value="Ethereum">ETH</option>
                <option value="USDT">USDT</option>
                <option value="USDC">USDC</option>
              </select>
            </div>
          </div>

          <div className="control-section">
            <h2>Send Crypto</h2>
            <div className="control-group">
              <input 
                type="text" 
                placeholder="Recipient Address" 
                name="recipientAddress"
                value={sendInfo.recipientAddress}
                onChange={handleSendInfoChange}
                className="text-input"
              />
            </div>
            
            <div className="control-group">
              <input 
                type="number" 
                placeholder="Amount" 
                name="amount"
                value={sendInfo.amount}
                onChange={handleSendInfoChange}
                className="text-input"
                min="0"
                step="0.000001"
              />
            </div>
            
            <button 
              className="send-crypto-btn" 
              onClick={sendCrypto}
              disabled={!account}
            >
              Send {currency}
            </button>
          </div>
        </div>
      </div>

      <div className="wallet-right-panel">
        <div className="balance-card">
          <div className="balance-header">
            <h2>Account Balance</h2>
            <button className="refresh-btn">↻</button>
          </div>
          <div className="balance-amount">
            <span className="currency">ETH</span>
            <span className="amount">{balance}</span>
          </div>
        </div>
        
        <div className="transactions-section">
          <div className="transactions-header">
            <h2>Recent Transactions</h2>
            <button className="view-all-btn">View All</button>
          </div>
          
          <div className="transactions-list">
            {transactions.map(transaction => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-icon">
                  {transaction.type === 'Deposit' ? '↓' : '↑'}
                </div>
                <div className="transaction-info">
                  <span className="transaction-type">{transaction.type}</span>
                  <span className="transaction-date">{transaction.date} • {transaction.time}</span>
                </div>
                <span className={`transaction-amount ${transaction.type.toLowerCase()}`}>
                  {transaction.amount} ETH
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wallet;