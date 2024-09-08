// App.js
import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Slider from './components/carousel/Slider';
import CarouselSkeletonCard from './components/skeletonCard/CarouselSkeletonCard';
import slides from './data/slidesData'; // Import the slides data

const App = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="p-5">
            <Header/>
            <div className="section pt-5 pb-0">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center mb-5">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold">Trending</h2>
                        </div>
                    </div>
                    {loading ? (
                        <CarouselSkeletonCard/>
                    ) : (
                        <Slider slides={slides} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
