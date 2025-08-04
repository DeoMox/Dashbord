// src/Pages/Login.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserCheck from "../Hooks/useUserCheck";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const { user, setUser } = useUserCheck();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.email && user.Username) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !username) {
      alert("Please enter both email and username");
      return;
    }

    setUser({ email, Username: username });
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Login iHUZA Dashboard</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
