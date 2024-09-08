// App.js
import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Slider from './components/carousel/Slider';
import CarouselSkeletonCard from './components/skeletonCard/CarouselSkeletonCard';
import img from './asset/img.png';
import img2 from './asset/img2.png';

const App = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const slides = [
        {
            image: img,
            category: 'Business, Travel',
            date: 'July 2, 2020',
            title: 'Your most unhappy customers are your greatest source of learning.',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            author: {
                name: 'Sergy Campbell',
                title: 'CEO and Founder',
                image: 'https://picsum.photos/42/42',
            },
        },
        {
            image: img2,
            category: 'Lifestyle, Wellness',
            date: 'July 3, 2020',
            title: 'Success is not the key to happiness. Happiness is the key to success.',
            description: 'In the middle of the ocean of words, separated by the unpredictable waves, there lie the untold stories.',
            author: {
                name: 'Amanda Jones',
                title: 'Editor-in-Chief',
                image: 'https://picsum.photos/43/43',
            },
        },
    ];

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
                    {loading ? <CarouselSkeletonCard/> :
                        <Slider slides={slides} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>}
                </div>
            </div>
        </div>
    );
};

export default App;
