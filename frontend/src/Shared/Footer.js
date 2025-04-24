// src/Shared/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p>© {new Date().getFullYear()} DeBank. All rights reserved.</p>
    </footer>
  );
};

export default Footer;