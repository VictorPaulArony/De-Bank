import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I connect my wallet?",
      answer: "To connect your wallet, click the 'Connect Wallet' button in the header. You'll be prompted to select your wallet provider (e.g., MetaMask) and approve the connection. Make sure you have a compatible wallet installed in your browser."
    },
    {
      question: "What cryptocurrencies are supported?",
      answer: "Currently, we support Ethereum (ETH), USDT, and USDC. More cryptocurrencies will be added in future updates. Each currency can be selected from the dropdown menu in the wallet section."
    },
    {
      question: "How does the lending feature work?",
      answer: "Our lending feature allows you to lend your crypto assets and earn interest. Navigate to the 'Lending' section, select your asset, enter the amount you wish to lend, and approve the transaction. Your earnings will be displayed in real-time."
    },
    {
      question: "What is Merry-Go-Round?",
      answer: "Merry-Go-Round is our unique community savings feature. It allows a group of users to pool their savings together, with each member receiving the full pool amount in turns. This creates a social saving system based on trust and community."
    },
    {
      question: "How secure is the Asset Lock feature?",
      answer: "Asset Lock is secured by smart contracts on the blockchain. When you lock assets, they are held in a time-locked contract that cannot be accessed until the specified release date. All contracts are audited and open-source."
    },
    {
      question: "What are the borrowing requirements?",
      answer: "To borrow, you need to provide collateral in supported cryptocurrencies. The loan-to-value (LTV) ratio varies by asset but typically ranges from 50-75%. Navigate to the 'Borrowing' section to view current rates and requirements."
    },
    {
      question: "How do I track my transactions?",
      answer: "All your transactions are visible in the 'Transactions' section. You can view details such as type (deposit/withdraw), date, time, and amount. Each transaction includes a link to view it on the blockchain explorer."
    },
    {
      question: "What should I do if a transaction fails?",
      answer: "If a transaction fails: 1) Check your wallet has sufficient funds (including gas fees), 2) Verify the network is correct, 3) Try again with higher gas fees if network is congested. If issues persist, contact support with your transaction hash."
    },
    {
      question: "How do I manage my profile settings?",
      answer: "Access your profile settings through the 'Profile' section in the sidebar. Here you can update your preferences, view your account history, and manage notification settings."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, our platform is web-based and optimized for both desktop and mobile browsers. A dedicated mobile app is under development and will be released in the near future."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about using our DeFi platform</p>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
