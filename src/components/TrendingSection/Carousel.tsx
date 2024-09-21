import CarouselItem from './CarouselItem';
import CarouselDots from './CarouselDots';
import { useSwipeable } from 'react-swipeable';
import { type Post } from '@/data/trendingPosts';

interface CarouselProps {
  posts: Post[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

const Carousel = ({
  posts,
  currentIndex,
  setCurrentIndex,
  nextSlide,
  prevSlide,
}: CarouselProps) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  });

  return (
    <div
      className='relative mx-auto w-full max-w-full overflow-hidden pb-16 lg:pb-0'
      style={{ minHeight: '400px' }}
      {...handlers}
    >
      <div
        className='ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] flex transition-transform duration-[700ms]'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {posts.map((post, index) => (
          <CarouselItem key={index} post={post} />
        ))}
      </div>

      <CarouselDots
        posts={posts}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default Carousel;
