import OurOffers from "./components/OurOffers";
import dataOffers from "./components/OurOffers/dataOffers";
import OurServices from "./components/OurServices";
import PopularModel from "./components/PopularModels";
import dataPopular from "./components/PopularModels/dataPopular";
import dataServices from "./components/OurServices/dataServices";
import WhyChooseUs from "./components/WhyChooseUs";
import dataWhyChooseUs from "./components/WhyChooseUs/dataWhyChooseUs";
import OurContacts from "./components/OurContacts";
import MainScreen from "./components/MainScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <MainScreen
        heading="БЫСТРО КАЧЕСТВЕННО ОТВЕТСТВЕННО"
        subheading=" Выполняется работа нашими специалистами"
      />
      <OurOffers data={dataOffers} title="МЫ ПРЕДОСТАВЛЯЕМ" />
      <PopularModel data={dataPopular} title="ПОПУЛЯРНЫЕ МОДЕЛИ" />
      <OurServices
        data={dataServices}
        title="Наши услуги"
        subTitle="Мы обеспечиваем комфорт для удобства совершения заказа"
      />
      <WhyChooseUs data={dataWhyChooseUs} title="Почему именно мы?" />
      <OurContacts title="Наши контакты" />
      <Footer/>
    </>
  );
}
