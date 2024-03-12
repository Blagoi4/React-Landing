import "./Header.css";
import ClimateIcon from "../../images/climateicon.jpeg";
import Phone from "../../images/phone.svg";
import Vector from "../../images/Vector.svg";
import Button from "../Button";
const Header = () => {
  return (
    <header>
      <div className="header-contact">
        <div className="container">
          <div className="header-contact-wrapper">
            <div className="header-contact__icon">
              <img src={ClimateIcon} alt="" />
              <p>Климатические системы в Украине</p>
            </div>

            <div className="header-contact__number">
              <img src={Phone} alt="" />
              <p>+ 3 (741) 485-68-23</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-catalog">
        <div className="container">
          <div className="header-catalog-wrapper">
            <div className="header-catalog__menu">
              <p className="p-text">
                Каталог
                <img src={Vector} alt="" />
              </p>
              <p>Услуги</p>
            </div>
            <div className="header-catalog__button">
              <Button text="Заказать обратный звонок" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
