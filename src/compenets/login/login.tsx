
import { Link } from "react-router-dom";
import { useLoginUser } from "../../hooks/loginHook.tsx"
import UserLogin from "./loginUser.tsx";

const LoginPage = () => {
    
    const { handleLoginUser } = useLoginUser();

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
