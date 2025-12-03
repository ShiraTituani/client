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
    <form onSubmit={handleSubmit}>
     <p></p>
      <input value={username} onChange={(e) => setUserName(e.target.value)} placeholder="userName" />
       <p></p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
       <p></p>
<input type="checkbox" checked={isAdmin} onChange={(e) => setisAdmin(e.target.checked)}/>     
      <p></p>
      <input type = "password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
       <p></p>
      <button type="submit">newUser</button>
    </form>
  );
};

export default CreateUser;
