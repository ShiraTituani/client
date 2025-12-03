import { useState } from "react";
import  type { PostProps } from "../../types";

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
 <form
    onSubmit={handleSubmit}
    className="max-w-md bg-white p-6 border rounded-lg shadow space-y-4"
  >
    <p></p>

    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <p></p>

    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Content"
      className="w-full p-2 h-28 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <p></p>

    <input
      value={tag}
      onChange={(e) => setTag(e.target.value)}
      placeholder="Tag"
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <p></p>

    <button
      type="submit"
      className="w-full bg-green-600 text- black py-2 rounded-lg hover:bg-green-700"
    >
      Create Post
    </button>
  </form>
  );
};

export default CreatePostForm;
