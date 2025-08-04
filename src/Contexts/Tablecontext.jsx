import { createContext, useContext, useState } from "react";

 export const Tablecontext = createContext();

export const TableProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "sarah.j@ihuza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "5 hours ago",
    },
    {
      name: "Emily Davis",
      email: "emily.d@ihuza.com",
      role: "Staff",
      status: "active",
      lastLogin: "3 days ago",
    },
     {
      name: "David Wilson",
      email: "emily.d@ihuza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "3 days ago",
    },
     {
      name: "Lisa Anderson",
      email: "emily.d@ihuza.com",
      role: "Staff",
      status: "active",
      lastLogin: "3 days ago",
    },
  ]);

  const deleteUser = (email) => {
    setTableData(prevUsers => prevUsers.filter(user => user.email !== email));
  };

  const addUser = (newUser) => {
    setTableData(prev => [...prev, newUser]);
  };

  return (
    <Tablecontext.Provider value={{ users, deleteUser, addUser }}>
      {children}
    </Tablecontext.Provider>
  );
};


export default Tablecontext