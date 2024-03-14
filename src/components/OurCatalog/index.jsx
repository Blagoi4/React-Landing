import "./OurCatalog.css";
import SectionTitle from "../SectionTitle";
import CatalogPagesIconVector from "../../images/catalogPagesIconVector.svg";
import Card from "./Card/Card";
import dataOurCatalog from "./dataOurCatalog";

const OurCatalog = ({ title }) => {
  return (
    <section>
      <div className="container">
        <div className="our-catalog-menu">
          {" "}
          Главная
          <img src={CatalogPagesIconVector} alt="" />
          <p>Каталог</p>
        </div>
        <SectionTitle title={title} />
        <div className="our-catalog-wrapper">
          {dataOurCatalog.map((item) => (
            <Card title={item.title}  key={item.key}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCatalog;
