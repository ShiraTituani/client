import { useEffect, useState } from "react";
import CreatePostForm from "./creatNewPost";
import axios from "axios";
import type { PostProps } from "../../types";
import SearchBar from "../filters/SearchBar";
const PostPage = () => {
const [posts, setPosts] = useState<PostProps[]>([]);
const [search, setSearch] = useState("");
  // delate Post 
  const handleDelete = async (id: string|undefined) => {

  try {
    await axios.delete(`http://localhost:5000/api/post/post/${id}`, {
      withCredentials: true
    });

    setPosts(prev => prev.filter(p => p._id !== id));
  } catch (error) {
    console.error(error);
  }
};
// fetch post
  const fetchPosts = async () => {
    try {
      const res = await axios("http://localhost:5000/api/post", { withCredentials: true });
      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
// create new post
  const handleCreatePost = async (post: PostProps) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/post",
        post,
        { withCredentials: true }
      );
      setPosts((prev) => [...prev, res.data]);
    } catch (error) {
      console.error(error);
    }
  };
const filteredPosts = posts.filter(post =>
  post.title.toLowerCase().includes(search.toLowerCase()) ||
  post.content.toLowerCase().includes(search.toLowerCase()) ||
  post.tag.toLowerCase().includes(search.toLowerCase())
);

return (
  <div className="container">
    

    <SearchBar 
      value={search}
      onChange={(value) => setSearch(value)}
    />
<h3>Create Post</h3>
    <CreatePostForm onCreate={handleCreatePost} />

    {filteredPosts.map((post, index) => (
      <div className="post" key={index}>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <small>{post.tag}</small>
        <button onClick={() => handleDelete(post._id)}>Delete</button>
      </div>
    ))}
  </div>
);

};

export default PostPage;

