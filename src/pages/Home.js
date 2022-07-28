import HeroSlider from '../components/HeroSlider';
import Helmet from '../components/Helmet';
import PolicyCard from '../components/PolicyCard';
import Section, { SectionTitle, SectionBody } from '../components/Section';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

import dataHeroSlider from '../assets/fake-data/hero-slider';
import policy from '../assets/fake-data/policy';
import productData from '../assets/fake-data/products';
import banner from '../assets/images/banner.png';

function Home() {
    return (
        <Helmet title="Trang chủ">
            <HeroSlider data={dataHeroSlider} control={true} auto={false} timeOut={5000} />

            <Section>
                <div style={{ gap: '20px' }} className="grid grid-col-4 grid-col-md-2 grid-col-sm-1">
                    {policy.map((item, index) => {
                        return (
                            <PolicyCard key={index} icon={item.icon} name={item.name} description={item.description} />
                        );
                    })}
                </div>
            </Section>

            <Section>
                <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
                <SectionBody>
                    <div style={{ gap: '20px' }} className="grid grid-col-4 grid-col-md-2 grid-col-sm-1">
                        {productData.getProducts(4).map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    slug={item.slug}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={item.price}
                                />
                            );
                        })}
                    </div>
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>Sản phẩm mới</SectionTitle>
                <SectionBody>
                    <div style={{ gap: '20px' }} className="grid grid-col-4 grid-col-md-2 grid-col-sm-1">
                        {productData.getProducts(8).map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    slug={item.slug}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={item.price}
                                />
                            );
                        })}
                    </div>
                </SectionBody>
            </Section>

            <Section>
                <SectionBody>
                    <Link to={'/catalog'}>
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>phổ biến</SectionTitle>
                <SectionBody>
                    <div style={{ gap: '20px' }} className="grid grid-col-4 grid-col-md-2 grid-col-sm-1">
                        {productData.getProducts(12).map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    slug={item.slug}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={item.price}
                                />
                            );
                        })}
                    </div>
                </SectionBody>
            </Section>
        </Helmet>
    );
}

export default Home;
