import { Link } from 'react-router-dom';
import Button from './Button';
import formatNumber from '../untils/formatNumber';

function ProductCard(props) {
    return (
        <div className="product-card" onClick={() => {}}>
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    {formatNumber(props.price)}
                    {props.priceOld ? (
                        <span className="product-card__price__old">
                            <del>{props.priceOld}</del>
                        </span>
                    ) : null}
                </div>
            </Link>
            <div className="product-card__btn">
                <Button icon="bx bx-cart" animate={true} size="sm">
                    Chọn mua
                </Button>
            </div>
        </div>
    );
}

export default ProductCard;
