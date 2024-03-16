import "./Catalogs.css";

import dataCatalogs from "./data";
import { useState } from "react";
import Filter from "./Filter";
import CatalogList from "./CatalogList";

const Catalogs = () => {
  const [cards, setCards] = useState(dataCatalogs);
  const [filterName, setFilterName] = useState([]);
  const [isChecked, setIsChecked] = useState(false)
  const getBrandName = (inputName) => {
    if (filterName.includes(inputName)) {
      const currentFilterNames = filterName.filter((el) => el !== inputName);
      setFilterName(currentFilterNames);
      setIsChecked(false)
    } else {
      setFilterName([...filterName, inputName]);
      setIsChecked(true)
    }
  };
  const filterCardsByBrandNAme = () => {
    const filterCards = dataCatalogs.filter((el) =>
      filterName.includes(el.brand)
    );
    setCards(filterCards);
  };
  const resetFilterCards = () => {
    setCards(dataCatalogs)
    setIsChecked(false)
  }
  return (
    <section>
      <div className="container">
        <div className="catalog-wrapper">
          <Filter
            filterCardsByBrandNAme={filterCardsByBrandNAme}
            getBrandName={getBrandName}
            resetFilterCards={resetFilterCards}
            isChecked={isChecked}
          />
          <CatalogList items={cards} />
        </div>
      </div>
    </section>
  );
};

export default Catalogs;
