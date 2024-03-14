import OurCatalog from '../components/OurCatalog';
import dataOurCatalog from '../components/OurCatalog/dataOurCatalog';
import OurOffers from '../components/OurOffers'
import dataOffers from "../components/OurOffers/dataOffers";
import PopularModel from '../components/PopularModels';
import dataPopular from '../components/PopularModels/dataPopular';


const Catalog = () => {
  return (
    <>
    <OurCatalog data={dataOurCatalog} title='Каталог'/>
      <OurOffers data={dataOffers} title="МЫ ПРЕДОСТАВЛЯЕМ" />
      <PopularModel data={dataPopular} title="ПОПУЛЯРНЫЕ МОДЕЛИ" />
    </>
  );
};

export default Catalog;
