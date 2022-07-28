import { useEffect, useRef, useState } from 'react';
import ProductCard from '../components/ProductCard';

function InfinityList(props) {
    const perload = 6;

    const listRef = useRef();

    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        setData(props.data.slice(0, perload));
        setIndex(1);
    }, [props.data]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (listRef && listRef.current) {
                if (
                    window.scrollY + window.innerHeight >=
                    listRef.current.clientHeight + listRef.current.offsetTop + 200
                ) {
                    setLoad(true);
                }
            }
        });
    }, [listRef]);

    useEffect(() => {
        const id = setTimeout(() => {
            const getItem = () => {
                const pages = Math.floor(props.data.length / perload);
                const maxIndex = props.data.length % perload === 0 ? pages : pages + 1;

                if (load && index <= maxIndex) {
                    const start = index * perload;
                    const end = start + perload;

                    setData(data.concat(props.data.slice(start, end)));
                    setIndex(index + 1);
                }
            };

            getItem();
            setLoad(false);
        }, 1000);
        return () => clearTimeout(id);
    }, [data, props.data, index, load]);

    return (
        <div ref={listRef}>
            <div className="grid grid-col-3 grid-col-md-2 grid-col-sm-1" style={{ gap: '20px' }}>
                {data.map((item, index) => {
                    return (
                        <ProductCard
                            key={index}
                            slug={item.slug}
                            img01={item.image01}
                            img02={item.image02}
                            name={item.title}
                            price={item.price}
                            animate={true}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default InfinityList;
