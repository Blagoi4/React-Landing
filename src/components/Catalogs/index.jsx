import "./Catalogs.css";
import Card from "../Card";
import dataCatalogs from "./data";
import CheckBox from "../CheckBox";
import dataCheckbox from "../CheckBox/dataCheckBox";
import Button from "./Filter/Button";

const Catalogs = () => {
  return (
    <section>
      <div className="container">
        <div className="catalog-wrapper">
          <div className="filter-wrapper">
            <div className="filter-brands">
              <div className="filter-brands__branding"> Бренд</div>
              <div className="filter-brands__names">
                {dataCheckbox.map((item) => (
                  <CheckBox
                    inputName={item.inputName}
                    inputId={item.inputId}
                    labelHtmlFor={item.labelHtmlFor}
                    xLinkHref={item.xLinkHref}
                    symbolId={item.symbolId}
                    key={item.inputId}
                  />
                ))}
              </div>
              <div className="filter-brands__buttons">
                <Button btnText="Применить" />
                <Button btnText="Сбросить фильтры" />
              </div>
            </div>
          </div>
          <div className="catalogList-wrapper">
            {dataCatalogs.map((item) => (
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
      </div>
    </section>
  );
};

export default Catalogs;
