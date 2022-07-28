import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import formatNumber from '../untils/formatNumber';

function CartItem(props) {
    const cartData = props.item;

    const [quantity, setQuantity] = useState(cartData.quantity);
    const [totalPrice, setTotalPrice] = useState(cartData.totalPrice);

    const localData = JSON.parse(localStorage.getItem('cartItem'));
    const data = localData ? localData : [];

    const deleteCart = () => {
        data.splice(props.id, 1);
        if (data.length === 0) {
            localStorage.removeItem('cartItem');
            window.location.reload();
            return;
        }
        localStorage.setItem('cartItem', JSON.stringify(data));
        window.location.reload();
    };

    const updatQuantity = (action) => {
        if (action === 'UP') {
            setQuantity(quantity + 1);
        }
        if (action === 'DOWN') {
            setQuantity(quantity <= 1 ? 1 : quantity - 1);
        }
        window.location.reload();
    };

    useEffect(() => {
        data.forEach((item, index) => {
            if (index === props.id) {
                item.quantity = quantity;
                item.totalPrice = quantity * item.price;
            }
        });
        localStorage.setItem('cartItem', JSON.stringify(data));
    }, [quantity, data, props]);

    useEffect(() => {
        setTotalPrice(cartData.price * quantity);
    }, [quantity, cartData]);

    return (
        <div className="cart__item">
            <div className="cart__item__image">
                <img src={cartData.image} alt="" />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    <Link to={`/catalog/${cartData.slug}`}>
                        {`${cartData.title} - ${cartData.color} - ${cartData.size}`}
                    </Link>
                </div>
                <div className="cart__item__info__price">{formatNumber(cartData.price)}</div>
                <div className="cart__item__info__price">{formatNumber(totalPrice)}</div>
                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn">
                            <i className="bx bx-minus" onClick={() => updatQuantity('DOWN')}></i>
                        </div>
                        <div className="product__info__item__quantity__input">{quantity}</div>
                        <div className="product__info__item__quantity__btn" onClick={() => updatQuantity('UP')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart__item__del">
                <i
                    className="bx bx-trash"
                    onClick={() => {
                        deleteCart();
                    }}
                ></i>
            </div>
        </div>
    );
}

export default CartItem;
