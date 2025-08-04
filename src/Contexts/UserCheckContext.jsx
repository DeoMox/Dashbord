// src/Contexts/UserCheckContext.jsx
import { createContext, useState, useEffect } from "react";

export const UserCheckContext = createContext();

export const CheckerProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    
    const storedUser = localStorage.getItem("loginUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("loginUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("loginUser");
    }
  }, [user]);

  return (
    <UserCheckContext.Provider value={{ user, setUser }}>
      {children}
    </UserCheckContext.Provider>
  );
};
