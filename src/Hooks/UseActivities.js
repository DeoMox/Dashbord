import { useContext } from "react";
import { ActivityContext } from "../Contexts/ActivityContext";

const UseActivities = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error("UseActivities must be used within an ActivityProvider");
  }
  return context;
};

export default UseActivities;
