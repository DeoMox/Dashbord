
import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user ,setUsers] = useState({
    name: "DIeudonne",
    email: "niyifashadieudonne@gmail.com",

  });

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

