import SectionTitle from "../SectionTitle";
import "./OurServices.css";
import Card from "./Card";

const OurServices = ({ title, subTitle ,data}) => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={title} subTitle={subTitle} />
        <div className="services-cards-wrapper">
          {data.map((item) => (
            <Card
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
              btnText={item.btnText}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
