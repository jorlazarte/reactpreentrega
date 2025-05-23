import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom"
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const [loading, SetLoading] = useState(false)

  let navigate = useNavigate()

  const login = () => {
  	console.log('user',user)

    SetLoading(true)

    setTimeout( () => {
      if(user === 'jorge'){
        setIsAuthenticated(true)
        navigate('/admin')
      }
      
      SetLoading(false)
    }, 2000)

    
  };

  const logout = () => {
  	setUser(null)
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);