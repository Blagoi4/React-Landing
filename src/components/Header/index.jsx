import "./Header.css";
import ClimateIcon from "../../images/climateicon.jpeg";
import Phone from "../../images/phone.svg";
import Vector from "../../images/Vector.svg";
import Button from "../Button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="header-contact">
        <div className="container">
          <div className="header-contact-wrapper">
            <Link to="/">
              <div className="header-contact__icon">
                <img src={ClimateIcon} alt="" />
                <p>Климатические системы в Украине</p>
              </div>
            </Link>
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
              <Link to="/catalog">
                <p className="p-text">
                  Каталог
                  <img src={Vector} alt="" />
                </p>
              </Link>
              <Link to='/reviews'>
                <p>Отзывы</p>
              </Link>
              <Link to='/todos'>
              <p>Список дел</p>
              </Link>
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
