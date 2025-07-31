
import Navigations from "./Components/Navigations";
import Topnav from "./Components/Topnav";
import Dashboard from "./Components/Dashbord";
import { UserProvider } from "./Contexts/UserContext";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { TableProvider } from "./Contexts/Tablecontext";
import { Usetheme } from "./Hooks/Usetheme";

const AppContent = () => {
  const { theme } = Usetheme();

  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } min-h-screen flex flex-col md:flex-row transition-colors duration-300`}
    >
      
      <div className="md:w-64">
        <Navigations />
      </div>

      
      <div className="flex-1 flex flex-col">
        <Topnav />
        <main className="flex-1 p-4 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <TableProvider>
      <ThemeProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </ThemeProvider>
    </TableProvider>
  );
};

export default App;
