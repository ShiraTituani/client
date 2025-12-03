import { useState } from "react";
import  type {UserProps} from "../../types";

type CreatUserProps = {
  onCreate: (post: UserProps) => void;
};

const CreateUser = ({ onCreate }:CreatUserProps ) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setisAdmin] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ username,email,isAdmin: !!isAdmin ,password });
  };

return (
  <form
    onSubmit={handleSubmit}
    className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full"
  >
    <input
      value={username}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="User Name"
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={isAdmin}
        onChange={(e) => setisAdmin(e.target.checked)}
      />
      <span className="text-gray-700">Admin?</span>
    </label>

    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button
      type="submit"
      className="w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition"
    >
      New User
    </button>
  </form>
);

};

export default CreateUser;
