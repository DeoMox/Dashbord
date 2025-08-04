import { useContext } from "react";
import {Tablecontext} from"../Contexts/Tablecontext"
export const Usetable = () => {
  const context = useContext(Tablecontext);
  if (!context) {
    throw new Error("Usetable must be used within a UserProvider");
  }
  return context;
};
 