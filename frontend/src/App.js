import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { WalletProvider } from './contexts/WalletContext';
import './styles/theme.css';
// import './styles/global.css';
import './styles/header.css';
import './styles/WalletDashboard.css';
// Components
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardEntrance from './components/DashHome';
import Lending from './components/Lending';
import Borrowing from './components/Borrowing';
import Transactions from './components/Transaction';
import Wallet from './components/Wallet';
import MerryGoRound from './components/MerryGoRound';
import AssetLock from './components/AssetLock';
import Profile from './components/Profile';
import FAQ from './components/FAQ';

// Pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import WalletConnection from './pages/WalletConnection';
import NotFoundPage from './pages/NotFoundPage';
import ServerErrorPage from './pages/ServerErrorPage';
function App() {
  return (
    <Router>
      <AuthProvider>
        <WalletProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/wallet-connection" element={<WalletConnection />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardEntrance />} />
              <Route path="lending" element={<Lending />} />
              <Route path="borrowing" element={<Borrowing />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="merry-go-round" element={<MerryGoRound />} />
              <Route path="asset-lock" element={<AssetLock />} />
              <Route path="profile" element={<Profile />} />
              <Route path="faq" element={<FAQ />} />
            </Route>

            {/* Error Routes */}
            <Route path="/error/500" element={<ServerErrorPage />} />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </WalletProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;