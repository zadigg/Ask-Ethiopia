import { type Post } from '../../data/trendingPosts';

interface CarouselDotsProps {
  posts: Post[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const CarouselDots = ({
  posts,
  currentIndex,
  setCurrentIndex,
}: CarouselDotsProps) => {
  return (
    <div className='absolute bottom-4 bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2 lg:bottom-4'>
      {posts.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`h-2.5 w-2.5 rounded-full ${
            index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
          } hover:bg-gray-600`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
