import Helmet from '../components/Helmet';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import { useParams } from 'react-router';

import productData from '../assets/fake-data/products';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';
import { useEffect } from 'react';

function Product() {
    const data = useParams();
    const product = productData.getProductBySlug(data.slug);

    const bonusProducts = productData.getProducts(8);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView data={product} />
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>Khám phá thêm</SectionTitle>
                <SectionBody>
                    <div className="grid grid-col-4 grid-col-md-2 grid-col-sm-1" style={{ gap: 20 }}>
                        {bonusProducts.map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={item.price}
                                    slug={item.slug}
                                />
                            );
                        })}
                    </div>
                </SectionBody>
            </Section>
        </Helmet>
    );
}

export default Product;
