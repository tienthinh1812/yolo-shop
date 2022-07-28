import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo-2.png';

function Footer() {
    const footerAboutLinks = [
        {
            display: 'Giới thiệu',
            path: '/about',
        },
        {
            display: 'Liên hệ',
            path: '/about',
        },
        {
            display: 'Tuyển dụng',
            path: '/about',
        },
        {
            display: 'Tin tức',
            path: '/about',
        },
    ];

    const footerCustomerLinks = [
        {
            display: 'Chính sách đổi trả',
            path: '/about',
        },
        {
            display: 'Chính sách bảo hành',
            path: '/about',
        },
        {
            display: 'Chính sách hoàn tiền',
            path: '/about',
        },
    ];

    return (
        <div className="footer">
            <div className="container">
                <div className="grid grid-col-4 grid-col-md-2 grid-col-sm-1">
                    <div>
                        <div className="footer__title">Tổng đài hỗ trợ</div>
                        <div className="footer__content">
                            <p>Liên hệ đặt hàng</p>
                            <p>Thắc mắc đơn hàng</p>
                            <p>Góp ý khiếu nại</p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">Về Yolo</div>
                        <div className="footer__content">
                            {footerAboutLinks.map((item, index) => {
                                return (
                                    <p key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">Chăm sóc khách hàng</div>
                        <div className="footer__content">
                            {footerCustomerLinks.map((item, index) => {
                                return (
                                    <p key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="footer__about">
                            <p>
                                <Link to={'/'}>
                                    <img src={logo} className="footer__logo" alt="" />
                                </Link>
                            </p>
                            <p>
                                Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng
                                Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
