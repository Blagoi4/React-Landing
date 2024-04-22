import FaqComments from "../components/FaqComments";
import "../components/FaqComments/FaqComments.css";

const faq = () => {
  return (
    <>
      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-content">
            <FaqComments/>
          </div>
        </div>
      </div>
    </>
  );
};

export default faq;
