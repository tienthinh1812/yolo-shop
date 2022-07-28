import { useCallback, useEffect, useState } from 'react';
import HeroSliderItem from './HeroSliderItem';

function HeroSlider(props) {
    const data = props.data;
    const [activeSlider, setActiveSlider] = useState(0);

    const nextSlide = useCallback(() => {
        console.log('next slide');
        const index = activeSlider >= data.length - 1 ? 0 : activeSlider + 1;
        setActiveSlider(index);
    }, [activeSlider, data]);

    const prevSlide = () => {
        const index = activeSlider <= 0 ? data.length - 1 : activeSlider - 1;
        setActiveSlider(index);
    };

    useEffect(() => {
        if (props.auto) {
            const autoSlide = setTimeout(() => {
                nextSlide();
            }, props.timeOut);
            return () => {
                clearTimeout(autoSlide);
            };
        }
    }, [activeSlider, nextSlide, props.timeOut, props.auto]);

    return (
        <div className="hero-slider">
            {data.map((item, index) => {
                return <HeroSliderItem key={index} item={item} active={index === activeSlider} />;
            })}
            {props.control ? (
                <div className="hero-slider__control">
                    <div className="hero-silder__control__item" onClick={prevSlide}>
                        <i className="bx bx-chevron-left"></i>
                    </div>
                    <div className="hero-silder__control__item">
                        <div className="index">
                            {activeSlider + 1} / {data.length}
                        </div>
                    </div>
                    <div className="hero-silder__control__item" onClick={nextSlide}>
                        <i className="bx bx-chevron-right"></i>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default HeroSlider;
