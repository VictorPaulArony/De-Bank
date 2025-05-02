// src/contexts/WalletContext.js
import React, { createContext, useState, useEffect } from 'react';
import useWalletConnect from '../hooks/useWalletConnect';
import { ethers } from 'ethers';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const { connectWallet, disconnectWallet } = useWalletConnect();
  const [account, setAccount] = useState(null);

  // Load account from local storage on component mount
  useEffect(() => {
    const storedAccount = localStorage.getItem('connectedAccount');
    if (storedAccount) {
      setAccount(storedAccount);
    }
  }, []);

  // Connect wallet and save account to local storage
  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      localStorage.setItem('connectedAccount', address); // Save to local storage
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  // Disconnect wallet and clear local storage
  const handleDisconnectWallet = () => {
    disconnectWallet();
    setAccount(null);
    localStorage.removeItem('connectedAccount'); // Clear from local storage
  };

  return (
    <WalletContext.Provider value={{ account, connectWallet: handleConnectWallet, disconnectWallet: handleDisconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};