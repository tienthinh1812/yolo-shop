import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import formatNumber from '../untils/formatNumber';
import Button from './Button';

function ProductView(props) {
    const product = props.data;

    const localData = JSON.parse(localStorage.getItem('cartItem'));
    const cartData = localData ? localData : '';

    const [reviewImage, setReviewImage] = useState(product.image01);

    const navigate = useNavigate();

    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState(1);
    const [expand, setExpand] = useState(false);

    const plusQuantity = () => {
        setQuantity(quantity + 1);
    };

    const minusQuantity = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1);
    };

    useEffect(() => {
        setReviewImage(product.image01);
        setColor();
        setQuantity(1);
        setSize();
        setExpand(false);
    }, [product]);

    const check = () => {
        if (color === undefined) {
            alert('Vui lòng chọn màu sắc');
            return false;
        }
        if (size === undefined) {
            alert('Vui lòng chọn kích cỡ');
            return false;
        }
        return true;
    };

    const addtoCart = (action) => {
        if (check()) {
            const newCart = {
                title: product.title,
                slug: product.slug,
                image: product.image01,
                color,
                size,
                price: product.price,
                totalPrice: product.price * quantity,
                quantity,
            };
            localStorage.setItem('cartItem', JSON.stringify([...cartData, newCart]));

            if (action === 'ADD') {
                alert('Đã thêm vào giỏ hàng thành công');
                window.location.reload();
            }
            if (action === 'BUY') {
                navigate('/cart');
            }
        }
    };

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setReviewImage(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={() => setReviewImage(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img alt="" src={reviewImage} />
                </div>
                <div className={`product-description ${expand ? 'expand' : ''}`}>
                    <div className="product-description__title">Chi tiết sản phẩm</div>
                    <div
                        className="product-description__content"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                    <div className="product-description__toggle">
                        <Button
                            size="sm"
                            onClick={() => {
                                setExpand(!expand);
                            }}
                        >
                            {expand ? 'Thu gọn' : 'Xem thêm'}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    <span className="product__info__price">{formatNumber(product.price)}</span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">Màu sắc</div>
                    <div className="product__info__item__list">
                        {product.colors.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`product__info__item__list__item ${item === color ? 'active' : ''}`}
                                    onClick={() => setColor(item)}
                                >
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">Kích cỡ</div>
                    <div className="product__info__item__list">
                        {product.size.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`product__info__item__list__item ${item === size ? 'active' : ''}`}
                                    onClick={() => setSize(item)}
                                >
                                    <span className="product__info__item__list__item__size">{item}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">Số lượng</div>
                    <div className="product__info__item__quantity">
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => {
                                minusQuantity();
                            }}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">{quantity}</div>
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => {
                                plusQuantity();
                            }}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button onClick={() => addtoCart('ADD')}>thêm vào giỏ</Button>
                    <Button
                        onClick={() => {
                            addtoCart('BUY');
                        }}
                    >
                        mua ngay
                    </Button>
                </div>
            </div>

            <div className={`product-description mobile ${expand ? 'expand' : ''}`}>
                <div className="product-description__title">chi tiết sản phẩm</div>
                <div
                    className="product-description__content"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                ></div>
                <div className="product-description__toggle">
                    <Button
                        size="sm"
                        onClick={() => {
                            setExpand(!expand);
                        }}
                    >
                        {expand ? 'Thu gọn' : 'Xem thêm'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductView;
