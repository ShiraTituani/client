import axios from "axios";
import type { LoginUser } from "../types";
import { useNavigate } from "react-router-dom";
import UserLogin from "./loginUser";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginUser = async (user: LoginUser) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user,
        { withCredentials: true }
      );
     
      navigate("/post");
    } catch (error) {
        alert("error in email/ password")
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <UserLogin onLogin={handleLoginUser} />
          <p>
      Don't have an account?
      <Link to="/register"> Register here</Link>
    </p>
    </div>
  );
};

export default LoginPage;
