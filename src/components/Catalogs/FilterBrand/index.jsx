import dataFilterBrand from "./dataFilterBrand";
import CheckBox from "../../CheckBox";

const FilterBrand = ({ getBrandName, checkedItems }) => {
  return (
    <div className="filter-brand-wrapper">
      <div className="filter-brands">
        <div className="filter-brands__branding"> Бренд</div>
        <div className="filter-brands__names">
          {dataFilterBrand.map((item) => (
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
      </div>
    </div>
  );
};

export default FilterBrand;
