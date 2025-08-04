
import { Navigate } from "react-router-dom";
import useUserCheck from "../Hooks/useUserCheck";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserCheck();
  if (!user || !user.email || !user.Username) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
