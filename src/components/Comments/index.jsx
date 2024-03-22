import "./Comments.css";

const Comments = ({name, email,body}) => {
  return (
    <div className="comments-card">
      <div>
        <strong>{name}</strong>
      </div>
      <div>{email}</div>
      <div>{body}</div>
    </div>
  );
};

export default Comments;
