import "../OurOffers/OurOffers.css";
import SectionTitle from "../SectionTitle";
import Card from "./Card";

const OurOffers = ({ data, title, subTitle }) => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={title} subTitle={subTitle} />
        <div className="offers-cards-wrapper">
          {data.map((item) => (
            <Card
              img={item.img}
              title={item.title}
              description={item.description}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffers;
