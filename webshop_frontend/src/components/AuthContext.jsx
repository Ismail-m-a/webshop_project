// Importerar nödvändiga hooks och funktioner från React-biblioteket.
import React, { createContext, useContext, useState, useEffect } from 'react';

// Skapar en ny kontext för autentisering.
const AuthContext = createContext();

// En provider-komponent som gör autentiseringsstatus och metoder tillgängliga i komponentträdet.
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage for login status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

// Funktion för att hantera inloggning.
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  // Renderar AuthContext.Provider och passerar inloggningsstatus och funktioner som värde.
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
