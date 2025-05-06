export const config = {
  walletConnectProjectId: "YOUR_WALLET_CONNECT_PROJECT_ID",
  contractAddress: "YOUR_CONTRACT_ADDRESS",
  supportedTokens: [
    {
      symbol: "ETH",
      name: "Ethereum",
      decimals: 18,
      icon: "data:image/svg+xml,<svg>...</svg>" 
    },
    {
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      icon: "data:image/svg+xml,<svg>...</svg>"
    },
    {
      symbol: "DAI",
      name: "Dai Stablecoin",
      decimals: 18,
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      icon: "data:image/svg+xml,<svg>...</svg>"
    }
  ],
  defaultGasLimit: 250000,
  defaultCollateralRatio: 150,
  minLoanAmount: "0.1",
  maxLoanAmount: "100",
  loanTermOptions: [7, 14, 30, 90, 180],
  merryGoRoundCyclePeriod: 30,
  networkFee: 0.1,
  interestRateRange: {
    min: 1,
    max: 20,
    default: 5
  },
  mgrGroupSizes: [5, 10, 15, 20],
  lockPeriodOptions: [30, 60, 90, 180, 365]
}