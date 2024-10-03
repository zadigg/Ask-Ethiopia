import { useEffect, useMemo, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import trendingPosts from '@/data/trendingPosts';
import { posts } from '@/data/Posts';
import CarouselSkeleton from '@/components/skeletonCard/CarouselSkeleton';
import Header from './components/Header/Header';
import TrendingSection from './components/TrendingSection/TrendingSection';
import CarouselSection from './components/TrendingSection/CarouselSection';
import GridSection from './components/body/GridSection';
import Footer from './components/footer/Footer';
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  useEffect(() => {
    const loadImages = trendingPosts.map(
      async (post) =>
        await new Promise((resolve) => {
          const img = new Image();
          img.src = post.image;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        }),
    );

    Promise.all(loadImages).then(() => setLoading(false));
  }, []);

  const memoizedPosts = useMemo(() => trendingPosts, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  });

  return (
    <div className='mx-auto max-w-[1294px] p-4'>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {loading ? (
        <CarouselSkeleton />
      ) : (
        <>
          <TrendingSection />
          <CarouselSection
            posts={memoizedPosts}
            handlers={handlers}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <GridSection posts={posts} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
