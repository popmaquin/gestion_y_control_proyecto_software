import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ type, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Enviar los datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (type === 'login') {
        response = await axios.post('http://localhost:3000/api/auth/login', formData);
      } else if (type === 'register') {
        response = await axios.post('http://localhost:3000/api/auth/register', formData);
      }

      if (response.status === 200 || response.status === 201) {
        onSubmitSuccess(response.data); // Llama a la función que maneja la respuesta exitosa
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error al procesar la solicitud');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h2 className="text-xl text-center mb-4">{type === 'login' ? 'Iniciar sesión' : 'Registrarse'}</h2>
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          {type === 'login' ? 'Iniciar sesión' : 'Registrarse'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
