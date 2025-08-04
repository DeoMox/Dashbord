// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./Contexts/UserContext";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { TableProvider } from "./Contexts/Tablecontext";
import { ActivityProvider } from "./Contexts/ActivityContext";

import { CheckerProvider } from "./Contexts/UserCheckContext";

import Navigations from "./Components/Navigations";
import ProtectedRoute from "./Components/ProtectedRoute";

import Dashbord from "./Pages/Dashbord";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import Login from "./Pages/Login";

const App = () => {
  return (
    <TableProvider>
      <ThemeProvider>
        <ActivityProvider>
          
            <CheckerProvider>
              <UserProvider>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Navigations />}>
                    <Route
                      index
                      element={
                        <ProtectedRoute>
                          <Dashbord />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="dashboard"
                      element={
                        <ProtectedRoute>
                          <Dashbord />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="users"
                      element={
                        <ProtectedRoute>
                          <Users />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="products"
                      element={
                        <ProtectedRoute>
                          <Products />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="categories"
                      element={
                        <ProtectedRoute>
                          <Categories />
                        </ProtectedRoute>
                      }
                    />
                  </Route>
                </Routes>
              </UserProvider>
            </CheckerProvider>
          
        </ActivityProvider>
      </ThemeProvider>
    </TableProvider>
  );
};

export default App;
