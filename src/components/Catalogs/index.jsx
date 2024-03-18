import "./Catalogs.css";
import dataCatalogs from "./data";
import { useState } from "react";
import Filter from "./Filter";
import CatalogList from "./CatalogList";

const Catalogs = () => {
  const [cards, setCards] = useState(dataCatalogs);
  const [filterName, setFilterName] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const getBrandName = (inputName) => {
    if (filterName.includes(inputName)) {
      const currentFilterNames = filterName.filter((el) => el !== inputName);
      setFilterName(currentFilterNames);
    } else {
      setFilterName([...filterName, inputName]);
    }
  };

  const filterCardsByBrandNAme = () => {
    const fromNumber = Number(from) ?? 0;
    const toNumber = Number(to) ?? 0;

    const priceCheck = (el, from, to) => {
      const elNumber = Number(el.price.split(" ")[0]);
      if (from && to) {
        return elNumber >= from && elNumber <= to;
      } else if (from) {
        return elNumber >= from;
      } else if (to) {
        return elNumber <= to;
      }
    };

    const filterCards = dataCatalogs.filter((el) => {
      if (filterName.length) {
        if (fromNumber || toNumber) {
          return (
            filterName.includes(el.brand) &&
            priceCheck(el, fromNumber, toNumber)
          );
        } else {
          return filterName.includes(el.brand);
        }
      } else if (fromNumber || toNumber) {
        return priceCheck(el, fromNumber, toNumber);
      } else {
        return true
      }
    });

    setCards(filterCards);
  };

  const resetFilterCards = () => {
    setCards(dataCatalogs);
    setFilterName([]);
  };

  return (
    <section>
      <div className="container">
        <div className="catalog-wrapper">
          <Filter
            filterCardsByBrandNAme={filterCardsByBrandNAme}
            getBrandName={getBrandName}
            resetFilterCards={resetFilterCards}
            checkedItems={filterName}
            onChangeFrom={setFrom}
            onChangeTo={setTo}
            from={from}
            to={to}
          />
          <CatalogList items={cards} />
        </div>
      </div>
    </section>
  );
};

export default Catalogs;
