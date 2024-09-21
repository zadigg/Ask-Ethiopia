import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface CarouselSkeletonProps {
  height?: number;
  count?: number;
}

const CarouselSkeleton = ({ height, count }: CarouselSkeletonProps) => {
  return (
    <div
      className='relative mx-auto w-full max-w-full overflow-hidden pb-16 lg:pb-0'
      style={{ minHeight: '400px' }}
    >
      <div className='ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] flex transition-transform duration-[700ms]'>
        <div className='flex w-full flex-shrink-0 flex-col items-center px-4 lg:flex-row lg:items-stretch'>
          {/* Image Skeleton */}
          <div className='mb-4 w-full lg:mb-0 lg:w-2/5'>
            <Skeleton
              height={350}
              width={441}
              className='img-fluid h-auto max-h-[385px] w-full rounded-lg object-cover lg:w-[441px]'
            />{' '}
            {/* Add rounded corners */}
          </div>

          {/* Text Skeleton */}
          <div className='flex w-full flex-col justify-center lg:w-3/5 lg:pl-6'>
            {/* Category and Date */}
            <div className='mb-2 flex'>
              <Skeleton width={150} height={20} className='mr-2' />{' '}
              {/* Category */}
              <Skeleton width={100} height={20} /> {/* Date */}
            </div>

            {/* Title Skeleton */}
            <Skeleton width='80%' height={30} className='mb-4' />

            {/* Description Skeleton */}
            <Skeleton width='90%' height={15} className='mb-2' />
            <Skeleton width='85%' height={15} className='mb-2' />
            <Skeleton width='80%' height={15} className='mb-4' />

            {/* Author Section */}
            <div className='mt-4 flex items-center'>
              <Skeleton circle={true} height={45} width={45} />
              <div className='ml-3'>
                <Skeleton width={120} height={20} className='mb-1' />{' '}
                {/* Author Name */}
                <Skeleton width={100} height={15} /> {/* Author Title */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-4 bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2 lg:bottom-4'>
        <Skeleton
          circle={true}
          height={10}
          width={10}
          className='h-2.5 w-2.5 rounded-full'
        />
        <Skeleton
          circle={true}
          height={10}
          width={10}
          className='h-2.5 w-2.5 rounded-full'
        />
        <Skeleton
          circle={true}
          height={10}
          width={10}
          className='h-2.5 w-2.5 rounded-full'
        />
      </div>
    </div>
  );
};

export default CarouselSkeleton;
