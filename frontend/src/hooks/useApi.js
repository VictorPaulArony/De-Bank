// src/hooks/useApi.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useApi = () => {
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Error:', error);
      navigate('/error/500'); // Navigate to the 500 error page
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useApi;