// src/pages/ServerErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServerErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-code">500</h1>
      <p className="error-message">Oops! Something went wrong on our end.</p>
      <Link to="/dashboard" className="error-button">
        Return to Dashboard
      </Link>
    </div>
  );
};

export default ServerErrorPage;