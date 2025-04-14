# DeBank - Decentralized Banking Platform

DeBank is a modern decentralized banking platform that combines traditional banking features with blockchain technology. It offers a user-friendly interface for managing digital assets, participating in group savings, and accessing DeFi services.

## 🌟 Features

- **Wallet Management**: Secure cryptocurrency wallet integration
- **Asset Lock**: Time-based asset locking mechanism
- **Merry-Go-Round**: Community-based group savings system
- **MMF (Money Market Fund)**: Lending and earning interest
- **Borrowing**: Collateralized crypto borrowing
- **Transaction History**: Detailed transaction tracking
- **Theme Support**: Light and dark mode

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MetaMask or compatible Web3 wallet

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/debank.git
   cd debank
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_RPC_URL=your_ethereum_rpc_url
   REACT_APP_CHAIN_ID=1
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## 💡 Usage Guide

### Connecting Your Wallet

1. Click the "Connect Wallet" button in the header
2. Select your preferred wallet (e.g., MetaMask)
3. Approve the connection request

### Managing Assets

1. Navigate to the "Wallet" section
2. View your balance and transaction history
3. Use the "Send" function to transfer assets
4. Monitor real-time price updates

### Using Merry-Go-Round (Group Savings)

1. Go to the "Groups" section
2. Join an existing group or create a new one
3. Set your contribution amount
4. Track group progress and payout schedule

### Locking Assets

1. Visit the "Lock Asset" section
2. Select the asset and amount to lock
3. Choose the lock duration
4. Confirm the transaction

### Lending (MMF)

1. Access the "MMF" section
2. View available lending pools
3. Choose an asset to lend
4. Confirm your lending amount

### Borrowing

1. Go to the "Borrow" section
2. Check available collateral options
3. Enter desired loan amount
4. Review and accept terms

## 🎨 Theme Customization

The app supports both light and dark modes:

- Click the theme toggle button in the header
- Theme preferences are automatically saved
- Customize theme variables in `src/styles/theme.css`

## 📱 Responsive Design

DeBank is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🔒 Security Features

- Secure wallet integration
- Time-locked smart contracts
- Transaction signing confirmation
- Automatic session management
- Secure RPC connections

## 🛠 Development

### Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/     # React components
│   ├── context/        # Context providers
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Page components
│   ├── Shared/         # Shared components
│   ├── styles/         # CSS styles
│   └── utils/          # Utility functions
```

### Key Technologies

- React.js
- Web3.js
- CSS3 with CSS Variables
- React Router
- Context API

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support:
- Check the FAQ section in the app
- Open an issue on GitHub
- Contact our support team

## 🔄 Updates

Stay updated with the latest features and improvements:
- Star the repository
- Watch for releases
- Follow our social media channels

---

Built with ❤️ by DeBank Team
