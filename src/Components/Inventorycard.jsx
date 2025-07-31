import { CircleCheckBig, Package } from "lucide-react";
import { Usetheme } from "../Hooks/Usetheme";
function Inventorycard() {
  const {theme,toggleTheme}= Usetheme();
  return (
    <div className= "flex flex-row items-start gap-4 bg-blue-600 p-4 rounded-xl shadow-md">
      <div className="flex justify-center items-center h-12 w-12 bg-blue-300 h-5 w-5">
        <Package className="text-white" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-amber-50">
          INVENTORY - System Overview
        </h1>
        <p className="text-amber-50">
          Monitor your iHUZA inventory and product assignment in real-time.
        </p>
        <p className="flex items-center gap-2 text-amber-50">
          <CircleCheckBig className="text-teal-300" /> All Systems Operational
        </p>
      </div>
    </div>
  );
}

export default Inventorycard;
