import axios from "axios";
import type { UserProps } from "../../types";
import { useNavigate } from "react-router-dom";
import CreateUser from "./creatNewUse";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleCreateUser = async (user: UserProps) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        user,
        { withCredentials: true }
      );

      console.log("User registered:", res.data);

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h3>New User</h3>
      <CreateUser onCreate={handleCreateUser} />

      
    </div>
  );
};

export default RegisterPage;
