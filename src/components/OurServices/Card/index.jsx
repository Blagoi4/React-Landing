import "../OurServices.css";

import Button from '../../Button/index'
const Card = ({img,title,description,price,btnText}) => {
  return (
    <div className="ourServices-card">
      <div className="ourServices-card__img">
        <img src={img} alt="" />
      </div>
      <div className="ourServices-card__info">
        <div className="ourServices-card__info__title">
          {title}
        </div>
        <div className="ourServices-card__info__description">
          {description}
        </div>
        <div className="ourServices-card__info__price">{price}</div>
        <div className="ourServices-card__info__btn">
          <Button text={btnText}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
