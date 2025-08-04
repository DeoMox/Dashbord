import { createContext, useState } from "react";

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    {
      title: "Product added to inventory",
      description: 'MacBook Pro 16" M3 (PROD2024001)',
      date: "Dec 4, 2024",
      iconType: "package",
    },
    {
      title: "Product assigned to Sarah Johnson",
      description: "Dell ThinkPad X1 Carbon (PROD2024001)",
      date: "Dec 3, 2024",
      iconType: "package",
    },
    {
      title: "Product assigned to Michael Brown",
      description: "Apple MacBook Air M2 (PROD2024001)",
      date: "Dec 2, 2024",
      iconType: "package",
    },
    {
      title: "Product sent for maintenance",
      description: "HP Spectre x360 - Screen replacement required",
      date: "Jan 16, 2024",
      iconType: "warning",
    },
    {
      title: "New user registered",
      description: "Amanda White – Staff Member",
      date: "Jan 14, 2024",
      iconType: "user",
    },
  ]);

  const addActivity = (activity) => {
    setActivities((prev) => [activity, ...prev]);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};
