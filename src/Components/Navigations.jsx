// src/Components/Navigation.jsx
import {
  Book,
  Menu,
  X,
  Users,
  Package,
  Layers,
  LogOut,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { Usetheme } from "../Hooks/Usetheme";
import TopNav from "./Topnav";
import LogoutButton from "./LogoutButton";
import useUserCheck from "../Hooks/useUserCheck"; // For displaying username

const navItems = [
  { to: "Dashboard", label: "Dashboard", icon: Book },
  { to: "Users", label: "Users", icon: Users, count: 116 },
  { to: "Products", label: "Products", icon: Package, count: 100 },
  { to: "Categories", label: "Categories", icon: Layers },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { theme } = Usetheme();
  const { user } = useUserCheck();

  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } w-64 p-4 shadow-md transition-transform duration-300 z-40 fixed md:static inset-y-0 left-0 min-h-screen ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Logo and title */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded">
            <Package className="w-6 h-6 text-white" />
          </div>
          <h1
            className={`text-xl font-bold ${
              theme === "light" ? "text-black" : "text-amber-50"
            }`}
          >
            iHUZA <span className="text-blue-600">INVENTORY</span>
          </h1>
        </div>
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation links */}
      <ul className="space-y-4">
        {navItems.map(({ to, label, icon: Icon, count }) => (
          <li key={to}>
            <NavLink
              to={`/${to}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"
                }`
              }
            >
              <Icon size={20} />
              <span className="flex-1 truncate">{label}</span>
              {count && (
                <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {count}
                </span>
              )}
            </NavLink>
          </li>
        ))}

        {/* Logout button using reusable component */}
        <li className="pt-10">
          <LogoutButton
            className="flex items-center gap-3 w-full px-4 py-2 text-lg text-amber-50 hover:bg-red-100 dark:hover:bg-red-900 transition rounded-lg"
            icon={<LogOut size={20} />}
          />
        </li>

        
      </ul>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = Usetheme();

  return (
    <div
      className={`flex min-h-screen w-full ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main layout */}
      <div className="flex-1 flex flex-col">
        {/* Top mobile nav toggle */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 shadow bg-white dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Menu
          </h2>
          <button onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Menu size={24} className="text-black dark:text-white" />
          </button>
        </div>

        {/* Top navigation */}
        <TopNav />

        {/* Page content */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
