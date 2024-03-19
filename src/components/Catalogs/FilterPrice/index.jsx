import "./FilterPrice.css";

const FilterPrice = ({ setFromPrice, setToPrice, fromPrice, toPrice }) => {
  return (
    <div className="filter-price-wrapper">
      <div className="filter-input">
        <p>Цена</p>
        <div className="filter-input__from">
          <p>От</p>
          <input
            value={fromPrice}
            onChange={(event) => setFromPrice(event.target.value)}
            type="text"
          />
        </div>
        <div className="filter-input__to">
          <p>До</p>
          <input
            value={toPrice}
            onChange={(event) => setToPrice(event.target.value)}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPrice;
