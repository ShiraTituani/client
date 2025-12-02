import { useState } from "react";
import type { LoginUser } from "../types";

type LoginUserProps = {
  onLogin: (user: LoginUser) => void;
};

const UserLogin = ({ onLogin }: LoginUserProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p></p>
      <input
      type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <p></p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <p></p>
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
