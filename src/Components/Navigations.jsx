
// import {
//   Book,
//   Menu,
//   X,
//   Users,
//   Package,
//   AlignCenter,
//   Layers,
//   LogOut,
// } from "lucide-react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";
//  import { Usetheme } from "../Hooks/Usetheme";
// import useUser from "../Hooks/useUser";

// const navItems = [
//   { to: "Dashboard", label: "Dashboard", icon: Book },
//   { to: "Users", label: "Users", icon: Users, count: 116 },
//   { to: "Products", label: "Products", icon: Package, count: 100 },
//   { to: "Assignments", label: "Assignments", icon: AlignCenter, count: 10 },
//   { to: "Categories", label: "Categories", icon: Layers },
// ];

// const Sidebar = ({ isOpen, setIsOpen }) => {
//   const { toggleTheme, theme } = Usetheme();
//   const { user } = useUser();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/login");
//   };

//   return (
//     <div
//       className={`${
//         theme === "light" ? "bg-white" : "bg-gray-800"
//       } w-64 p-4 shadow-md flex-shrink-0 transition-transform duration-300 z-10 ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       } md:translate-x-0 sm:w-`}
//     >
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center space-x-2">
//           <div className="flex justify-center items-center h-10 w-10 bg-blue-500">
//             <Package className="w-8 h-8 text-blue-600" />
//           </div>
//           <h1
//             className={`${
//               theme === "light"
//                 ? "bg-white text-black"
//                 : "bg-gray-800 text-amber-50"
//             } text-xl font-bold`}
//           >
//             iHUZA <span className="text-blue-600">INVENTORY</span>
//           </h1>
//         </div>
//         <button className="md:hidden" onClick={() => setIsOpen(false)}>
//           <X size={24} />
//         </button>
//       </div>

//       <ul className="space-y-4">
//         {navItems.map(({ to, label, icon: Icon, count }) => (
//           <li key={to}>
//             <NavLink
//               to={`/${to}`}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
//                   isActive
//                     ? "bg-blue-500 text-white"
//                     : "text-gray-700 hover:bg-blue-100"
//                 }`
//               }
//             >
//               <Icon size={20} />
//               <span className="flex-1">{label}</span>
//               {count && (
//                 <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
//                   {count}
//                 </span>
//               )}
//             </NavLink>
//           </li>
//         ))}

//         <li className="pt-10">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 w-full px-4 py-2 text-2xl hover:bg-red-100 transition"
//           >
//             <LogOut  className=  {`${theme==="light"?"bg-white":"bg-gray-800 text-amber-50" }`} size={20} />
//             <span className={`${theme==="light"?"bg-white":"bg-gray-800 text-amber-50" } flex-1`}>Logout</span>
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen">
      
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      
//       <div className="md:hidden p-4 shadow-md bg-white flex items-center ">
//         <h2 className="text-lg font-semibold"></h2>
//         <button onClick={() => setIsOpen(true)}>
//           <Menu size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navigation;

  import {
  Book,
  Menu,
  X,
  Users,
  Package,
  AlignCenter,
  Layers,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Usetheme } from "../Hooks/Usetheme";
import useUser from "../Hooks/useUser";

const navItems = [
  { to: "Dashboard", label: "Dashboard", icon: Book },
  { to: "Users", label: "Users", icon: Users, count: 116 },
  { to: "Products", label: "Products", icon: Package, count: 100 },
  { to: "Assignments", label: "Assignments", icon: AlignCenter, count: 10 },
  { to: "Categories", label: "Categories", icon: Layers },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { toggleTheme, theme } = Usetheme();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } w-64 p-4 shadow-md transition-transform duration-300 z-40 fixed md:static inset-y-0 left-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="flex justify-center items-center h-10 w-10 bg-blue-500">
            <Package className="w-8 h-8 text-blue-600" />
          </div>
          <h1
            className={`${
              theme === "light"
                ? "bg-white text-black"
                : "bg-gray-800 text-amber-50"
            } text-xl font-bold`}
          >
            iHUZA <span className="text-blue-600">INVENTORY</span>
          </h1>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
      </div>

      <ul className="space-y-4">
        {navItems.map(({ to, label, icon: Icon, count }) => (
          <li key={to}>
            <NavLink
              to={`/${to}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-blue-100"
                }`
              }
            >
              <Icon size={20} />
              <span className="flex-1">{label}</span>
              {count && (
                <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {count}
                </span>
              )}
            </NavLink>
          </li>
        ))}

        <li className="pt-10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2 text-lg hover:bg-red-100 transition"
          >
            <LogOut
              className={`${
                theme === "light"
                  ? "bg-white"
                  : "bg-gray-800 text-amber-50"
              }`}
              size={20}
            />
            <span
              className={`${
                theme === "light"
                  ? "bg-white"
                  : "bg-gray-800 text-amber-50"
              } flex-1`}
            >
              Logout
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Mobile top toggle bar */}
      <div className="md:hidden flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Menu
        </h2>
        <button onClick={() => setIsOpen(true)}>
          <Menu size={24} className="text-black dark:text-white" />
        </button>
      </div>
    </>
  );
};

export default Navigation;
