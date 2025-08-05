// src/Components/LogoutButton.jsx
import { useNavigate } from "react-router-dom";
import useUserCheck from "../Hooks/useUserCheck";

const LogoutButton = () => {
  const { setUser } = useUserCheck();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
