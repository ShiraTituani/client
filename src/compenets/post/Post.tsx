type PostProps = {
  title: string;
  content: string;
  tag: string;
};

const Post = ({ title,  content, tag }: PostProps) => {
  return (
    <div>
      <h3>{title}</h3>
      
      <p>{content}</p>
      <span>#{tag}</span>
    </div>
  );
};

export default Post;
