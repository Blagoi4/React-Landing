import "./Card.css";
import Button from "../Button";

const Card = ({ img, title, price, btnText, brand, color}) => {
  return (
    <div className="popular-card">
      <div className="popular-card__img">
        <img src={img} alt="" />
      </div>
      <div className="popular-card__title">{title}</div>
      {brand && <div className="popular-card__title">{brand}</div>}
      {color}
      <div className="popular-card__price">{price} UAH </div>
      <Button text={btnText} />
    </div>
  );
};

export default Card;
