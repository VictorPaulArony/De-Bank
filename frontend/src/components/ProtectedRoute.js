import React, { useState } from 'react';
import useWalletConnect from '../hooks/useWalletConnect';

const ProtectedRoute = ({ children }) => {
  const { account, connectWallet } = useWalletConnect();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      await connectWallet();
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  if (!account) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Connect Wallet</h1>
            <p className="text-gray-600 mb-6">Please connect your wallet to access the DeFi dashboard</p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleConnect}
              disabled={isConnecting}
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50"
            >
              {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
            </button>
            <button
              onClick={() => window.open('https://metamask.io', '_blank')}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Install MetaMask
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            New to Web3? <a href="https://ethereum.org/wallets/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">Learn about wallets</a>
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;