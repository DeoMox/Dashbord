import { createContext, useState } from "react";

export const UserCheckContext = createContext();

export const CheckerProvider = ({ children }) => {
  const [validUsers] = useState(
    { username: "admin", password: "admin123" }
  );

  return (
    <UserCheckContext.Provider value={{ validUsers }}>
      {children}
    </UserCheckContext.Provider>
  );
};
