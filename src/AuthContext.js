// AuthContext.js
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
    navigate("/addads"); // Ensure this matches the correct path
  };
  

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    navigate("/signup");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
