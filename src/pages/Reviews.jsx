import Comments from "../components/Comments";
import MainScreen from "../components/MainScreen";
import Spinner from "../components/Spinner";
import useApi from "../hooks/useApi";
import Posts from "../components/Posts";
import { URL_COMMENTS, URL_POSTS } from "../constants/constants";
import { useEffect, useState } from "react";
import Button from "../components/Catalogs/Button";

const Reviews = () => {
  // const { data: comments, loading } = useApi(URL_COMMENTS);
  // const { data: posts } = useApi(URL_POSTS);
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  console.log('1')
  useEffect(() => {
    console.log('2')
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(URL_COMMENTS);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) { 
        console.error(error);
      }
    };
    fetchData();
    return () => {
      console.log('3')
    }
  },[open])
  return (
    <>
      <MainScreen heading="heading" subheading="subheading" />
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="comments-wrapper">
            {data.map((item) => (
              <Comments
                key={item.id}
                name={item.name}
                body={item.body}
                email={item.email}
              />
            ))}
          </div>
              <div>
                <Button onClick={() => setOpen(!open)}  btnText='Нажми на меня'/>
              </div>
          {/* <div className="posts-wrapper">
            {posts.map((item) => (
              <Posts key={item.id} body={item.body} title={item.title} />
            ))}
          </div> */}
        </div>
      )}
    </>
  );
};

export default Reviews;
