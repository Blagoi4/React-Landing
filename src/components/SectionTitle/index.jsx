import "../SectionTitle/SectionTitle.css";
import Line from "../../images/line.svg";


const SectionTitle = ({title,subTitle}) => {
  return (
    <>
      <div className="line">
        <img src={Line} alt="Line" />
      </div>
      <h2>{title}</h2>
      {subTitle && (<p className="subTitle">{subTitle}</p>)}
      
    </>
  );
};

export default SectionTitle;
