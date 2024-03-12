import '../../OurOffers/OurOffers.css';

const Card = ({ img, title, description }) => {
  return (
    <div className="offer-card">
      <div className="offer-card__logo">
        <img src={img} alt="" />
      </div>
      <div className="offer-card__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
