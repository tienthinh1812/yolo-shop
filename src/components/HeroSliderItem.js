import { Link } from 'react-router-dom';
import Button from './Button';

function HeroSliderItem(props) {
    return (
        <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
            <div className="hero-slider__item__info">
                <div className={`hero-slider__item__info__title color-${props.item.color}`}>
                    <span>{props.item.title}</span>
                </div>
                <div className={'hero-slider__item__info__description'}>
                    <span>{props.item.description}</span>
                </div>
                <div className="hero-slider__item__info__btn">
                    <Link to={props.item.path}>
                        <Button bg={props.item.color} icon="bx bx-cart" animate={true}>
                            Xem chi tiết
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="hero-slider__item__image">
                <div className={`shape bg-${props.item.color}`}></div>
                <img src={props.item.img} alt="" />
            </div>
        </div>
    );
}

export default HeroSliderItem;
