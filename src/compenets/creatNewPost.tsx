import { useState } from "react";
import  type { PostProps } from "../types";

type CreatePostFormProps = {
  onCreate: (post: PostProps) => void;
};

const CreatePostForm = ({ onCreate }: CreatePostFormProps) => {
  const [title, setTitle] = useState("");
  //const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ title, content, tag });
  };

  return (
    <form onSubmit={handleSubmit}>
     <p></p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
       <p></p>
      
       <p></p>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
         <p></p>
      <input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Tag" />
       <p></p>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
