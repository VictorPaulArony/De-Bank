import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWalletConnect from '../hooks/useWalletConnect';
import '../styles/WalletConnection.css';

const WalletConnection = () => {
  const navigate = useNavigate();
  const { account, connectWallet } = useWalletConnect();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      await connectWallet();
      navigate('/dashboard'); // Redirect to dashboard after successful connection
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  // If wallet is already connected, redirect to dashboard
  React.useEffect(() => {
    if (account) {
      navigate('/dashboard');
    }
  }, [account, navigate]);

  return (
    <div className="wallet-container">
      <div className="wallet-card">
        <div className="wallet-header">
          <h1 className="wallet-title">Welcome to DeBenk</h1>
          <p className="wallet-subtitle">Connect your wallet to start using DeFi services</p>
        </div>
        <div className="wallet-buttons">
          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className="connect-button"
          >
            {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
          </button>
          <button
            onClick={() => window.open('https://metamask.io', '_blank')}
            className="install-button"
          >
            Install MetaMask
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="back-button"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletConnection;
