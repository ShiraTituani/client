import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./compenets/register";
import LoginPage from "./compenets/login";
import PostPage from "./compenets/PostsPage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<LoginPage />} />      
      <Route path="/login" element={<LoginPage />} />  
       <Route path="/register" element={<RegisterPage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;




/*
import { useState } from "react";
import CreatePostForm from "./compenets/creatNewPost"; 
import CreateUser from "./compenets/creatNewUse";
import Post from "./compenets/Post";
import type { PostProps, UserProps } from "./types";
import axios from "axios";
//stop
const App = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
   const [user, setUser] = useState<UserProps[]>([]);

const handleCreatePost = async (post: PostProps) => {
  try {
    const res = await axios.post('http://localhost:5000/api/post', 
    post,{ withCredentials: true });

    setPosts(prev => [...prev, res.data]);
  } catch (error) {
    console.error(error);
  }
};
const handleCreateUser = async (user: UserProps) => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/register', user ,{withCredentials: true} );
    setUser(prev => [...prev, res.data]);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
   <h3> new User </h3>
  <CreateUser onCreate={handleCreateUser} />

      <h3> create post</h3>

      
      <CreatePostForm onCreate={handleCreatePost} />

     
      {posts.map((post, index) => (
        <Post 
          key={index}
          title={post.title}
          
          content={post.content}
          tag={post.tag}
        />
      ))}
    </div>
  );
};

export default App;

*/


