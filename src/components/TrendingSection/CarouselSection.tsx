import LazyLoad from 'react-lazyload';
import CarouselDots from './CarouselDots';

interface CarouselSectionProps {
  posts: any[];
  handlers: any;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const CarouselSection = ({
  posts,
  handlers,
  currentIndex,
  setCurrentIndex,
}: CarouselSectionProps) => (
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
        <div
          key={index}
          className='mx-auto flex w-full flex-shrink-0 flex-col items-center md:space-x-2 lg:flex-row lg:items-stretch lg:shadow-md lg:shadow-gray-50'
        >
          <div className='mb-4 w-full lg:mb-0 lg:w-[489px]'>
            <LazyLoad height={385} offset={100}>
              <img
                alt='carousel slider image'
                className='img-fluid mx-auto max-h-[386px] w-full rounded-lg md:w-[697px]'
                src={post.image}
              />
            </LazyLoad>
          </div>
          <div className='flex w-full flex-col justify-center pt-10 md:w-[697px] lg:w-3/5'>
            <div className='mb-2'>
              <span className='category font-bold text-gray-800 hover:text-gray-600'>
                {post.category}
              </span>{' '}
              &mdash;{' '}
              <span className='date ml-2 text-gray-400'>{post.date}</span>
            </div>
            <h2 className='heading mb-2 font-bold custom-sm:text-2xl custom-md:text-3xl custom-lg:text-4xl'>
              <a href='single.html' className='hover:underline'>
                {post.title}
              </a>
            </h2>
            <p className='mb-4 text-gray-400'>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
    <CarouselDots
      posts={posts}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    />
  </div>
);

export default CarouselSection;
