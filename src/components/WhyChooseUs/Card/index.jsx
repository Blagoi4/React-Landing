import '../WhyChooseUs.css'

const Card = ({title,img}) => {
return (
    <div className='whyChooseUs-card'>
        <h3 className='whyChooseUs-card__title'>{title}</h3>
        <div className='whyChooseUs-card__img'><img src={img} alt="" /></div>
    </div>
    
)
}


export default Card