import "./Filter.css";

import CheckBox from "../../CheckBox";
import dataCheckbox from "../../CheckBox/dataCheckBox";
import Button from "../Filter/Button";

const Filter = ({
  getBrandName,
  filterCardsByBrandNAme,
  resetFilterCards,
  checkedItems,
  onChangeFrom,
  onChangeTo,
  from,
  to,
}) => {
  return (
    <div className="filter-wrapper">
      <div className="filter-input">
        <p>Цена</p>
        <div className="filter-input__from">
          <p>От</p>
          <input value={from} onChange={(event) => onChangeFrom(event.target.value)} type="text" />
        </div>
        <div className="filter-input__to">  
          <p>До</p>
          <input value={to} onChange={(event) => onChangeTo(event.target.value)} type="text" />
        </div>
      </div>
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
              isChecked={checkedItems.includes(item.inputName)}
            />
          ))}
        </div>
        <div className="filter-brands__buttons">
          <Button onClick={filterCardsByBrandNAme} btnText="Применить" />
          <Button onClick={resetFilterCards} btnText="Сбросить фильтры" />
        </div>
      </div>
    </div>
  );
};

export default Filter;