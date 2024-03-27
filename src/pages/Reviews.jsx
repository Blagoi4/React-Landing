import Comments from "../components/Comments";
import MainScreen from "../components/MainScreen";
import Spinner from "../components/Spinner";
import useApi from "../hooks/useApi";
import Posts from "../components/Posts";
import { URL_COMMENTS, URL_POSTS } from "../constants/constants";

const Reviews = () => {
  const { data: comments, loading } = useApi(URL_COMMENTS);
  const { data: posts } = useApi(URL_POSTS);
  return (
    <>
      <MainScreen heading="heading" subheading="subheading" />
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="comments-wrapper">
            {comments.map((item) => (
              <Comments
                key={item.id}
                name={item.name}
                body={item.body}
                email={item.email}
              />
            ))}
          </div>

          <div className="posts-wrapper">
            {posts.map((item) => (
              <Posts key={item.id} body={item.body} title={item.title} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
