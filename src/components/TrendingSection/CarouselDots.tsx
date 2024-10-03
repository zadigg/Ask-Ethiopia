interface CarouselDotsProps {
  posts: any[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const CarouselDots = ({
  posts,
  currentIndex,
  setCurrentIndex,
}: CarouselDotsProps) => (
  <div className='my-6 flex justify-center space-x-2'>
    {posts.map((_, index) => (
      <span
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`h-3 w-3 cursor-pointer rounded-full ${
          currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
        }`}
      ></span>
    ))}
  </div>
);

export default CarouselDots;
