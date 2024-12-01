import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const data = await login(email, password); // Llama a la API
    localStorage.setItem("token", data.token); // Guarda el token en localStorage
    navigate("/dashboard"); // Redirige al dashboard
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;

