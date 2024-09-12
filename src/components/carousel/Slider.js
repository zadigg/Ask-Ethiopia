// components/Slider/Slider.js
import {useCallback, useEffect, useRef} from 'react';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import Slide from './Slide';
import NavigationDots from './NavigationDots';

const Slider = ({slides, activeIndex, setActiveIndex}) => {
    const sliderRef = useRef();
    const lastIndexRef = useRef(0);

    const settings = {
        items: 1,
        slideBy: 'page',
        autoplay: true,
        controls: false,
        nav: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        mouseDrag: true,
        loop: true,
        autoplayButtonOutput: false,
    };

    const handleSlideChange = useCallback((info) => {
        const newIndex = info.displayIndex - 1;
        if (newIndex !== lastIndexRef.current) {
            setActiveIndex(newIndex);
            lastIndexRef.current = newIndex;
        }
    }, [setActiveIndex]);

    useEffect(() => {
        if (sliderRef.current) {
            const sliderInstance = sliderRef.current.slider;
            sliderInstance.events.on('indexChanged', handleSlideChange);

            return () => {
                sliderInstance.events.off('indexChanged', handleSlideChange);
            };
        }
    }, [handleSlideChange]);

    return (
        <div className="flex">
            <div className="w-full">
                <div className="posts-slide-wrap">
                    <div className="posts-slide" id="posts-slide">
                        <div className="posts-slide-wrap relative">
                            <TinySlider settings={settings} ref={sliderRef}>
                                {slides.map((slide, index) => (
                                    <Slide key={index} slide={slide}/>
                                ))}
                            </TinySlider>
                            <NavigationDots slides={slides} activeIndex={activeIndex}
                                            goToSlide={(index) => sliderRef.current.slider.goTo(index)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
