

 import { Bell, Moon, Sun, Settings, User } from "lucide-react";
import useUser from "../Hooks/useUser";
import { Usetheme } from "../Hooks/Usetheme";

const TopNav = () => {
  const { user } = useUser();
  const { toggleTheme, theme } = Usetheme();

  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } flex flex-wrap justify-between items-center px-4 md:px-6 py-3 border-b shadow-sm gap-y-2`}
    >
      <div className={`${theme === "light" ? "text-black" : "text-white"}`}>
        <h1 className="text-lg md:text-xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome {user.name}</p>
      </div>

      <div className="flex items-center gap-3 md:gap-4 flex-wrap text-gray-600 dark:text-gray-200">
        {theme === "light" ? (
          <Moon onClick={toggleTheme} className="cursor-pointer" />
        ) : (
          <Sun onClick={toggleTheme} className="cursor-pointer" />
        )}

        <Settings className="w-5 h-5 cursor-pointer" />

        <div className="relative">
          <Bell className="w-5 h-5 cursor-pointer" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        <span className="text-sm hidden sm:inline">{user.email}</span>
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
          <User className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
