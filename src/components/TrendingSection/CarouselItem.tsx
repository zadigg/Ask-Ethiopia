import LazyLoad from 'react-lazyload';
import Skeleton from 'react-loading-skeleton';
import { type Post } from '@/data/trendingPosts';

interface CarouselItemProps {
  post: Post;
}

const CarouselItem = ({ post }: CarouselItemProps) => {
  return (
    <div className='flex w-full flex-shrink-0 flex-col items-center lg:flex-row lg:items-stretch'>
      {/* Image Section */}
      <div className='mb-4 w-full lg:mb-0 lg:w-2/5'>
        <LazyLoad
          height={385}
          offset={100}
          placeholder={<Skeleton height={350} width={441} />}
        >
          <img
            alt='carousel slider image'
            className='img-fluid max-h-[386px] w-full rounded-lg lg:w-[441px]'
            src={post.image}
          />
        </LazyLoad>
      </div>

      {/* Text Section */}
      <div className='flex w-full flex-col justify-center lg:w-3/5 lg:pl-6'>
        <div className='mb-2'>
          <span className='category font-semibold text-gray-800 hover:text-gray-600'>
            {post.category}
          </span>
          &mdash;
          <span className='date ml-2 text-gray-600'>{post.date}</span>
        </div>
        <h2 className='heading mb-2 text-2xl font-bold'>
          <a href='single.html' className='hover:underline'>
            {post.title}
          </a>
        </h2>
        <p className='mb-4'>{post.description}</p>
        <a className='post-author flex items-center' href='single.html'>
          <div className='author-pic mr-3'>
            <img
              alt='carousel author image'
              className='h-12 w-12 rounded-full'
              src={post.author.image}
            />
          </div>
          <div className='text'>
            <div className='font-bold text-gray-900'>{post.author.name}</div>
            <div className='text-sm text-gray-600'>{post.author.title}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
