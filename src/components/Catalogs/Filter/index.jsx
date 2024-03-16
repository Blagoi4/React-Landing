import "./Filter.css";

import CheckBox from "../../CheckBox";
import dataCheckbox from "../../CheckBox/dataCheckBox";
import Button from "../Filter/Button";

const Filter = ({ getBrandName, filterCardsByBrandNAme, resetFilterCards, isChecked }) => {
  return (
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
              onClick={() => getBrandName(item.inputName)}
              isChecked={item.isChecked}
            />
          ))}
        </div>
        <div className="filter-brands__buttons">
          <Button  onClick={filterCardsByBrandNAme} btnText="Применить" />
          <Button  onClick={resetFilterCards} btnText="Сбросить фильтры" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
