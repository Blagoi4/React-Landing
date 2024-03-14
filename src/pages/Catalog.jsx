import OurCatalog from '../components/OurCatalog';
import dataOurCatalog from '../components/OurCatalog/dataOurCatalog';
import OurOffers from '../components/OurOffers'
import dataOffers from "../components/OurOffers/dataOffers";
import PopularModel from '../components/PopularModels';
import dataPopular from '../components/PopularModels/dataPopular';
import Catalogs from '../components/Catalogs'

const Catalog = () => {
  return (
    <>
    <OurCatalog data={dataOurCatalog} title='Каталог'/>
    <PopularModel data={dataPopular} title="ПОПУЛЯРНЫЕ МОДЕЛИ" />
     <Catalogs/>
      
    </>
  );
};

export default Catalog;
