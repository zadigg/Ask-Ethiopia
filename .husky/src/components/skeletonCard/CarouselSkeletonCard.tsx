import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CarouselSkeletonCard = () => {
  return (
    <div className='item'>
      <div className='post-entry mb-4 lg:flex'>
        {/* Skeleton for Thumbnail */}
        <div className='thumbnail mb-4 flex-shrink-0 lg:mb-0 lg:mr-5'>
          <Skeleton
            height={321}
            width={360}
            className='w-full rounded object-cover'
          />
        </div>

        {/* Skeleton for Content */}
        <div className='content flex w-full flex-col justify-center'>
          <div className='post-meta mb-3 text-sm text-gray-600'>
            {/* Skeleton for Category and Date */}
            <Skeleton width={150} height={20} />
          </div>

          {/* Skeleton for Title */}
          <h2 className='mb-2 text-xl font-bold'>
            <Skeleton width={300} height={24} />
          </h2>

          {/* Skeleton for Description */}
          <p className='mb-4'>
            <Skeleton count={3} className='w-full text-gray-500' />
          </p>

          {/* Skeleton for Author Info */}
          <a
            className='post-author flex items-center text-sm text-gray-600'
            href='single.html'
          >
            <div className='author-pic mr-2 h-12 w-12'>
              <Skeleton circle={true} height={48} width={48} />
            </div>
            <div className='text'>
              <strong className='block font-semibold'>
                <Skeleton width={100} />
              </strong>
              <span className='text-xs'>
                <Skeleton width={80} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselSkeletonCard;
