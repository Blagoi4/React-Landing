import { URL_FAQ } from "../../constants/constants";
import useApi from "../../hooks/useApi";
import Spinner from "../Spinner";
import "./FaqComments.css";

const FaqComments = () => {
  const { data: comments, loading } = useApi(URL_FAQ);
  console.log(comments);
  return (
    <>
      <div className="faq">
        {loading ? (
          <Spinner />
        ) : (
          comments.map((item) => <div className="faq-card">{item.name}</div>)
        )}
      </div>
    </>
  );
};

export default FaqComments;
