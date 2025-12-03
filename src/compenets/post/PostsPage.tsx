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
  
     <div className="container mx-auto p-6">

    <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>

    <SearchBar 
      value={search}
      onChange={(value) => setSearch(value)}
    />

  
    <div className="flex gap-6 mt-6">

      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post._id}
            className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-xl font-bold text-gray-800">{post.title}</h4>

            <p className="text-gray-700 mt-2">{post.content}</p>

            <span className="inline-block mt-3 text-sm text-blue-600 font-semibold">
              #{post.tag}
            </span>

            <button
              onClick={() => handleDelete(post._id)}
              className="mt-4 bg-red-500 text-black px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

     
      <div className="w-80">
        <CreatePostForm onCreate={handleCreatePost} />
      </div>

    </div>
  </div>
);

};

export default PostPage;

