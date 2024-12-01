import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <div className="text-center mt-20">
              <h1 className="text-3xl font-bold">Bienvenido al Dashboard</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

