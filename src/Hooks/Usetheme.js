import { Import } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
 


export const Usetheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("Context is Undefined");
  }

  return context;
};