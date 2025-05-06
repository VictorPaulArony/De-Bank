// src/services/DeBankService.js
const DeBankService = {
    getTransactions: async () => {
      // Simulate fetching transactions
      try {
        const data = [
          { from: '0x...', to: '0x...', amount: '10.00', date: '2023-03-06' },
          { from: '0x...', to: '0x...', amount: '5.00', date: '2023-03-07' },
        ];
  
        // Ensure the returned value is always an array
        return Array.isArray(data) ? data : [];
      } catch (error) {
        console.error('Error fetching transactions:', error);
        return [];
      }
    },
  };
  
  export default DeBankService;