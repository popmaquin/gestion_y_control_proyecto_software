import axios from 'axios';

const API_URL = 'http://localhost:3000/apiauth'; // Cambia por la URL de tu API

// Realizar login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
  }
};

// Realizar registro
export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al registrar el usuario');
  }
};

