import "./Catalogs.css";
import dataCatalogs from "./data";
import { useState } from "react";
import Button from "./Button";
import CatalogList from "./CatalogList";
import FilterPrice from "./FilterPrice";
import FilterBrand from "./FilterBrand";
import FilterColor from "./FilterColor";
const MIN_PRICE = 0;
const MAX_PRICE = 50_000;

const Catalogs = () => {
  const [cards, setCards] = useState(dataCatalogs);
  const [filterBrandName, setFilterBrandName] = useState([]);
  const [fromPrice, setFromPrice] = useState(MIN_PRICE);
  const [toPrice, setToPrice] = useState(MAX_PRICE);
  const [filterColor, setFilterColor] = useState([]);

  const getBrandName = (inputName) => {
    if (filterBrandName.includes(inputName)) {
      const currentFilterNames = filterBrandName.filter(
        (el) => el !== inputName
      );
      setFilterBrandName(currentFilterNames);
    } else {
      setFilterBrandName([...filterBrandName, inputName]);
    }
  };

  const getColorFilter = (inputName) => {
    if (filterColor.includes(inputName)) {
      const currentFilterColor = filterColor.filter((el) => el !== inputName);
      setFilterColor(currentFilterColor);
    } else {
      setFilterColor([...filterColor, inputName]);
    }
  };

  const isBrandFiltered = (el) => filterBrandName.includes(el.brand);

  const isPriceFiltered = (el) => el.price >= fromPrice && el.price <= toPrice;

  const isColorFiltered = (el) => filterColor.includes(el.color);

  const applyFilter = () => {
    let filteredCards = dataCatalogs;

    if (filterBrandName.length > 0) {
      filteredCards = filteredCards.filter((el) => isBrandFiltered(el));
    }

    if (fromPrice !== 0 || toPrice !== 0) {
      filteredCards = filteredCards.filter((el) => isPriceFiltered(el));
    }

    if (filterColor.length > 0) {
      filteredCards = filteredCards.filter((el) => isColorFiltered(el));
    }
    setCards(filteredCards);
  };

  const resetFilterCards = () => {
    setCards(dataCatalogs);
    setFilterBrandName([]);
    setFilterColor([]);
    setFromPrice(MIN_PRICE);
    setToPrice(MAX_PRICE);
  };

  return (
    <section>
      <div className="container">
        <div className="catalog-wrapper">
          <div className="filter-wrapper">
            <FilterPrice
              setFromPrice={setFromPrice}
              setToPrice={setToPrice}
              fromPrice={fromPrice}
              toPrice={toPrice}
            />
            <FilterBrand
              getBrandName={getBrandName}
              checkedItems={filterBrandName}
            />
            <FilterColor 
            getColorFilter={getColorFilter}
            checkedItems={filterColor}
            />
            <div className="filter-brands__buttons">
              <Button onClick={applyFilter} btnText="Применить" />
              <Button onClick={resetFilterCards} btnText="Сбросить фильтры" />
            </div>
          </div>
          <CatalogList items={cards} />
        </div>
      </div>
    </section>
  );
};

export default Catalogs;
