
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserCheck from "../Hooks/useUserCheck";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[error , setError]=useState("")
  const { validUsers } = useUserCheck(); // assumed to be an array of user objects
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields.");
      return; 
    }

    
    console.log("validUsers:", validUsers);

    const formdata = {username , password}

    localStorage.setItem('user' , JSON.stringify(formdata))

    console.log(formdata)

    const SavedUser =JSON.parse( localStorage.getItem("user"));

    if(SavedUser.username === validUsers.username && SavedUser.password === validUsers.password){
      navigate('/Dashbord')
    
    }
    else{
      setError("incorrect password or username")
    }

    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">
          Login to iHUZA Dashboard
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-900 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <span className="text-red-500">{error}</span>
      </form>
    </div>
  );
};

export default Login;
