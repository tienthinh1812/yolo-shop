import Button from '../components/Button';
import Helmet from '../components/Helmet';
import CartItem from '../components/CartItem';

import { Link } from 'react-router-dom';
import formatNumber from '../untils/formatNumber';

function Cart() {
    const localData = JSON.parse(localStorage.getItem('cartItem'));
    const cartData = localData ? localData : [];

    const totalPrice = cartData.map((item) => {
        return Number(item.totalPrice);
    });

    const order = () => {
        alert('Bạn đã đặt hàng thành công');
        localStorage.removeItem('cartItem');
        window.location.reload();
    };

    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>Bạn đang có sản phẩm trong giỏ hàng</p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền:</span>
                            <span>{localData ? formatNumber(totalPrice.reduce((total, num) => total + num)) : 0}</span>
                        </div>
                    </div>

                    <div className="cart__info__btn">
                        <Button size="block" onClick={() => order()}>
                            Đặt hàng
                        </Button>
                        <Link to="/catalog">
                            <Button size="block">Tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>

                <div className="cart__list">
                    {localData
                        ? localData.map((item, index) => {
                              return <CartItem key={index} id={index} item={item}></CartItem>;
                          })
                        : 'Chưa có sản phẩm nào'}
                </div>
            </div>
        </Helmet>
    );
}

export default Cart;
