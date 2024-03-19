import "./CatalogList.css";
import Card from "../../Card";

const CatalogList = ({ items }) => {
  return (
    <div className="catalogList-wrapper">
      {items.map((item) => (
        <Card
          img={item.img}
          title={item.title}
          price={item.price}
          btnText={item.btnText}
          brand={item.brand}
          color={item.color}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default CatalogList;
