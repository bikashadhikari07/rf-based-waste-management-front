import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
      setUser({ token }); // Store the token only
    }
  }, []);

  const login = (token) => {
    setIsAuthenticated(true);
    setUser({ token });
    Cookies.set("token", token, { expires: 7 }); // Store token in cookies for 7 days
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    Cookies.remove("token"); // Remove token from cookies
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
