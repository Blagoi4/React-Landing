import "./Posts.css";

const Posts = ({title, body}) => {
  return (
    <div className="posts-card">
      
        <div>
          <strong>{title}</strong>
        </div>
        <div>{body}</div>
      </div>
   
  );
};

export default Posts;
