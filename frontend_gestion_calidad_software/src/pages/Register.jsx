import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  // Callback que maneja el éxito del registro
  const handleRegisterSuccess = (data) => {
    // Si es exitoso, redirigimos al login
    alert('Registro exitoso');
    navigate('/login');
  };

  return (
    <div>
      <LoginForm type="register" onSubmitSuccess={handleRegisterSuccess} />
    </div>
  );
};

export default Register;
