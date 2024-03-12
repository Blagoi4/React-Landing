import "./MainScreen.css";
import VectorIcon from "../../images/vectoricon.svg";
const MainScreen = ({ heading, subheading }) => {
  return (
    <section className="section-main">
      <div className="header-main">
        <div className="container">
          <div className="header-main-wrapper">
            <div className="header-main__utp">
              <div>
                <p className="utp-small__text-name">“ПРОМХОЛОД” -</p>
                <h1 className="utp-text">{heading}</h1>
                <p className="utp-small__text">{subheading}</p>
                <div className="utp-text-services">
                  <p className="text-emphasize">Перейти к услугам</p>
                  <img src={VectorIcon} width="12px" height="18px" alt="" />
                </div>
              </div>
            </div>
            <div className="header-main__image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
