import { useState, useEffect, useMemo } from 'react';
import Carousel from './Carousel';
import CarouselSkeleton from '../skeletonCard/CarouselSkeleton';
import trendingPosts from '../../data/trendingPosts';

const TrendingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === trendingPosts.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trendingPosts.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Load all images before rendering
  useEffect(() => {
    const loadImages = trendingPosts.map(async (post) => {
      return await new Promise((resolve) => {
        const img = new Image();
        img.src = post.image;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
      });
    });

    Promise.all(loadImages).then(() => setLoading(false));
  }, []);

  const memoizedPosts = useMemo(() => trendingPosts, []);

  return (
    <>
      <div className='mb-20 flex justify-center pt-5 '>
        <div className='text-center lg:w-2/3'>
          <h2 className='text-4xl font-bold'>Trending</h2>
        </div>
      </div>

      {loading ? (
        <CarouselSkeleton height={400} count={1} />
      ) : (
        <Carousel
          posts={memoizedPosts}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      )}
    </>
  );
};

export default TrendingSection;
