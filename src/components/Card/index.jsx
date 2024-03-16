import "./Card.css";
import Button from '../Button'

const Card = ({ img, title, price, btnText , brand}) => {
  return (
    <div className="popular-card">
      <div className="popular-card__img"><img src={img} alt="" /></div>
      <div className="popular-card__title">{title}</div> 
      {brand && <div className="popular-card__title">{brand}</div> } 
      <div className="popular-card__price">{price}</div>
      <Button text={btnText}/>
    </div>
  );
};

export default Card;
