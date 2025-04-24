// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/dashboard" className="error-button">
        Go Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFoundPage;