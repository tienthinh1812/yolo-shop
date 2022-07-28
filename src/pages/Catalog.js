import Helmet from '../components/Helmet';
import Checkbox from '../components/Checkbox';
import { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../components/Button';

import category from '../assets/fake-data/category';
import color from '../assets/fake-data/product-color';
import size from '../assets/fake-data/product-size';
import InfinityList from '../components/InfinityList';
import productData from '../assets/fake-data/products';

function Catalog() {
    const initFilter = {
        category: [],
        color: [],
        size: [],
    };

    const productList = productData.getAllProducts();

    const [products, setProducts] = useState(productList);

    const [filterResult, setFilterResult] = useState(initFilter);

    const filter = (type, item, checked) => {
        if (checked) {
            switch (type) {
                case 'CATELOGY':
                    setFilterResult({ ...filterResult, category: [...filterResult.category, item] });
                    break;
                case 'COLOR':
                    setFilterResult({ ...filterResult, color: [...filterResult.color, item] });
                    break;
                case 'SIZE':
                    setFilterResult({ ...filterResult, size: [...filterResult.size, item] });
                    break;
                default:
                    break;
            }
        } else {
            switch (type) {
                case 'CATELOGY':
                    const newCategory = filterResult.category.filter((e) => e !== item);
                    setFilterResult({ ...filterResult, category: newCategory });
                    break;
                case 'COLOR':
                    const newColor = filterResult.color.filter((e) => e !== item);
                    setFilterResult({ ...filterResult, color: newColor });
                    break;
                case 'SIZE':
                    const newSize = filterResult.size.filter((e) => e !== item);
                    setFilterResult({ ...filterResult, size: newSize });
                    break;
                default:
                    break;
            }
        }
    };

    const clearFilter = () => setFilterResult(initFilter);

    const updateProducts = useCallback(() => {
        let temp = productList;

        if (filterResult.category.length > 0) {
            temp = temp.filter((item) => filterResult.category.includes(item.categorySlug));
        }

        if (filterResult.color.length > 0) {
            temp = temp.filter((item) => {
                const check = item.colors.find((color) => filterResult.color.includes(color));
                return check !== undefined;
            });
        }

        if (filterResult.size.length > 0) {
            temp = temp.filter((item) => {
                const check = item.size.find((size) => filterResult.size.includes(size));
                return check !== undefined;
            });
        }

        setProducts(temp);
    }, [filterResult, productList]);

    useEffect(() => {
        updateProducts();
    }, [updateProducts]);

    const filterRef = useRef();

    const showHideFilter = () => filterRef.current.classList.toggle('active');

    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter" ref={filterRef}>
                    <div className="catalog__filter__close" onClick={showHideFilter}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">danh mục sản phẩm</div>

                        <div className="catalog__filter__widget__content">
                            {category.map((item, index) => {
                                return (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <Checkbox
                                            label={item.display}
                                            checked={filterResult.category.includes(item.categorySlug)}
                                            onChange={(e) => {
                                                filter('CATELOGY', item.categorySlug, e.checked);
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">danh mục sản phẩm</div>

                        <div className="catalog__filter__widget__content">
                            {color.map((item, index) => {
                                return (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <Checkbox
                                            label={item.display}
                                            checked={filterResult.color.includes(item.color)}
                                            onChange={(e) => {
                                                filter('COLOR', item.color, e.checked);
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">kích cỡ</div>

                        <div className="catalog__filter__widget__content">
                            {size.map((item, index) => {
                                return (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <Checkbox
                                            label={item.display}
                                            checked={filterResult.size.includes(item.size)}
                                            onChange={(e) => {
                                                filter('SIZE', item.size, e.checked);
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onClick={clearFilter}>
                                xóa bộ lọc
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="catalog__filter__toggle">
                    <Button size="sm" onClick={showHideFilter}>
                        bộ lọc
                    </Button>
                </div>

                <div className="catalog__content">
                    <InfinityList data={products} />
                </div>
            </div>
        </Helmet>
    );
}

export default Catalog;
