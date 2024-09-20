import { useEffect, useRef, useState } from 'react';
import CarouselSkeletonCard from '../skeletonCard/CarouselSkeletonCard';
import PostCard from './PostCard';
import { TinySlider } from '@/library/TinySlider';
import { type TinySliderInstance } from 'tiny-slider';
import trendingPosts from '../../data/trendingPosts'; // Import the slides data

const TrendingSection = () => {
  const carousel = useRef<TinySliderInstance | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='section pb-0 pt-20'>
      <div className='container mx-auto px-10'>
        <div className='mb-20 flex justify-center'>
          <div className='text-center lg:w-2/3'>
            <h2 className='text-4xl font-bold'>Trending</h2>
          </div>
        </div>
        {loading ? (
          <CarouselSkeletonCard />
        ) : (
          <TinySlider
            swipeAngle={true}
            items={1}
            mouseDrag
            ref={carousel}
            controls={false}
            nav={false}
            autoplay
            autoplayTimeout={3000}
            autoplayText={['', '']}
            onClick={(slideIndex, info, event) => {
              console.log(slideIndex, info, event);
            }}
          >
            {trendingPosts.map((post, index) => (
              <>
                <PostCard key={index} post={post} />
              </>
            ))}
          </TinySlider>
        )}
      </div>
    </div>
  );
};

export default TrendingSection;
