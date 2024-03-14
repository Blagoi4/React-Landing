import "../PopularModels/PopularModels.css";
import SectionTitle from "../SectionTitle";
import Card from "../Card";

const PopularModel = ({ data, title, subTitle }) => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={title} subTitle={subTitle} />
        <div className="popular-models-wrapper">
          {data.map((item) => (
            <Card
              img={item.img}
              title={item.title}
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

export default PopularModel;
