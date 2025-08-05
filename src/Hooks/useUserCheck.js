import { useContext } from "react";
import { UserCheckContext } from "../Contexts/UserCheckContext";

const useUserCheck = () => {
  const context = useContext(UserCheckContext);
  if (!context) {
    throw new Error("useUserCheck must be used within a CheckerProvider");
  }
  return context;
};

export default useUserCheck;
