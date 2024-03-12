import "./WhyChooseUs.css";
import SectionTitle from "../SectionTitle";
import Card from "./Card";
import Button from "../Button";
const WhyChooseUs = ({ title, subTitle, data }) => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={title} subTitle={subTitle} />
        <div className="whyChooseUs-wrapper">
          {data.map((item) => (
            <Card img={item.img} title={item.title} key={item.id} />
          ))}
        </div>
        <div className="btn-WhyChooseUs">
          <Button text="Оставить заявку" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
