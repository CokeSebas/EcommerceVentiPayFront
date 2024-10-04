// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; // Cambia según tu API

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
