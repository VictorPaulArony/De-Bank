// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    brand: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      500: '#3b82f6',
      600: '#2563eb',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
      },
    },
  },
});

export default theme;