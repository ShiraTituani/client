
import { Link } from "react-router-dom";
import { useLoginUser } from "../../hooks/loginHook.tsx"
import UserLogin from "./loginUser.tsx";

const LoginPage = () => {
    
    const { handleLoginUser } = useLoginUser();

    return (

  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h3 className="text-2xl font-bold text-center mb-6">Login</h3>

    <UserLogin onLogin={handleLoginUser} />

    <p className="text-center mt-4">
      Don't have an account?
      <Link to="/register" className="text-blue-600 font-semibold hover:underline ml-1">
        Register here
      </Link>
    </p>
  </div>

    );
};

export default LoginPage;

