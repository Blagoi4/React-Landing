import "../PopularModels.css";
import Button from '../../Button/index'

const Card = ({ img, title, price, btnText }) => {
  return (
    <div className="popular-card">
      <div className="popular-card__img"><img src={img} alt="" /></div>
      <div className="popular-card__title">{title}</div>
      <div className="popular-card__price">{price}</div>
      <Button text={btnText}/>
    </div>
  );
};

export default Card;
