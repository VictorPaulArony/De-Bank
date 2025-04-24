// src/hooks/useWalletConnect.js
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const useWalletConnect = () => {
  const [account, setAccount] = useState(null);

  // Function to connect the wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        // Save the connected account to localStorage
        localStorage.setItem('connectedAccount', address);
        setAccount(address);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    // Remove the connected account from localStorage
    localStorage.removeItem('connectedAccount');
    setAccount(null);
  };

  // Auto-connect on component mount
  useEffect(() => {
    const savedAccount = localStorage.getItem('connectedAccount');
    if (savedAccount) {
      setAccount(savedAccount);
    }
  }, []);

  return { account, connectWallet, disconnectWallet };
};

export default useWalletConnect;