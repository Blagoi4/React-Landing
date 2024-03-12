import "./Footer.css";
import FooterIconMap from "../../images/footerIconMap.svg";
import PhoneFoter from '../../images/phoneFoter.svg'
import EmeilFooter from '../../images/emeilFooter.svg'
const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-main__info">
          <div className="footer-main__info__contacts">
            <div className="info-contacts">
              <img src={FooterIconMap} width="25px" height="25px" alt="" />
              <span>
                40506, Днепропетровская область, Криворожский район г.Кривой рог,
                Днепропетровское шоссе, дом 40
              </span>
            </div>
            <div className="info-contacts">
              <img src={PhoneFoter} width="25px" height="25px" alt="" />
              <span>
                +9 (451) 485-68-28 <br />
                +9 (452) 476-70-32
              </span>
            </div>
            <div className="info-contacts">
              <img src={EmeilFooter} width="25px" height="25px" alt="" />
              <span>vladislavblagoiwork@gmail.com</span>
            </div>
          </div>
          <div className="footer-main__info__requisites">
            <span>Реквизиты</span>
            <br />
            <span>ОГРПП: 9192345101017</span>
            <span>ИНН: 2994035287</span>
            <span>КПП 302401001</span>
            <span>Рсч: 3070288434000025342</span>
            <span>Ксч: 30401018240000000054</span>
            <span>Банк: ФАО ПРИВАТБАНК</span>
            <span>Бик: 044525225</span>
            <span>ОКПО: 40365786</span>
            <span>ОКТМО: 07612101001</span>
            <span>
              Ген. директор и гл. бухгалтер: <br /> Романова Инна Юрьевна
            </span>
          </div>
        </div>
        <div className="protection-rules">
          <span className="protection-rules__text">
            Климатические системы в Кривом роге “ПРОМХОЛОД”
          </span>
          <span className="protection-rules__subtext">
            {" "}
            Все права защищены©promholod 2016 - 2022
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
