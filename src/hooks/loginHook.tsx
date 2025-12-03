import axios from "axios";
import type { LoginUser } from "../types";
import { useNavigate } from "react-router-dom";

export const useLoginUser = () => {
      const navigate = useNavigate();

  const login = async (user: LoginUser) => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/login",
        user,
        { withCredentials: true }
      );

      return { success: true };

    } catch (err) {
      return { success: false, error: err };
    }
  };
   const handleLoginUser = async (user: LoginUser) => {
        const result = await login(user);

        if (result.success) {
            navigate("/post");
        } else {
            alert("error in email/password");
            console.error(result.error);
        }
}
  return { handleLoginUser };
};
