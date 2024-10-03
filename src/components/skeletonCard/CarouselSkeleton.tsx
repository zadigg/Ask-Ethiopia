import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CarouselSkeleton = () => {
  return (
    <div className='relative mx-auto w-full max-w-full overflow-hidden pb-16 lg:pb-0'>
      {/* Trending Title Skeleton */}
      <div className='mb-20 flex justify-center bg-white pt-5'>
        <div className='text-center lg:w-2/3'>
          <Skeleton width='30%' height={40} className='mx-auto' />
        </div>
      </div>

      {/* Carousel Skeleton */}
      <div className='ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] flex transition-transform duration-700'>
        <div className='flex w-full flex-shrink-0 flex-col items-center md:space-x-2 lg:flex-row lg:items-stretch lg:shadow-lg lg:shadow-gray-200'>
          <div className='mb-4 w-full lg:mb-0 lg:w-[489px]'>
            <Skeleton
              height={385}
              width='100%'
              className='img-fluid max-h-[386px] w-full rounded-lg lg:w-[489px]'
            />
          </div>

          {/* Text Skeleton */}
          <div className='flex w-full flex-col justify-center p-5 lg:w-3/5'>
            {/* Category and Date Skeleton */}
            <div className='mb-2 flex'>
              <Skeleton width={120} height={20} className='mr-2' />{' '}
              <Skeleton width={80} height={20} />
            </div>

            {/* Title Skeleton */}
            <Skeleton
              width='70%'
              height={25}
              className='mb-2 font-bold custom-sm:text-2xl custom-md:text-3xl custom-lg:text-4xl'
            />

            {/* Description Skeleton */}
            <Skeleton width='90%' height={15} className='mb-2' />
            <Skeleton width='80%' height={15} className='mb-2' />
            <Skeleton width='75%' height={15} className='mb-4' />

            {/* Author Section Skeleton */}
            <div className='flex items-center'>
              <Skeleton circle={true} height={40} width={40} />
              <div className='ml-3'>
                <Skeleton width={100} height={20} className='mb-1' />
                <Skeleton width={80} height={15} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Skeleton Placeholder */}
      <div className='my-6 flex justify-center space-x-2'>
        <Skeleton
          circle={true}
          height={12}
          width={12}
          className='rounded-full'
        />
        <Skeleton
          circle={true}
          height={12}
          width={12}
          className='rounded-full'
        />
        <Skeleton
          circle={true}
          height={12}
          width={12}
          className='rounded-full'
        />
      </div>

      {/* Grid Skeleton */}
      <div className='mt-10 grid grid-cols-1 gap-4 gap-y-10 lg:grid-cols-3'>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div key={index} className='h-auto p-4'>
              {/* Image Section */}
              <Skeleton height={200} width='100%' className='mb-4 rounded-lg' />

              {/* Text Section */}
              <div className='flex flex-col'>
                <Skeleton width='50%' height={20} className='mb-2' />
                <Skeleton width='60%' height={25} className='mb-3' />
                <Skeleton width='90%' height={15} className='mb-2' />
                <Skeleton width='85%' height={15} className='mb-2' />
                <Skeleton width='80%' height={15} className='mb-4' />

                {/* Author Section */}
                <div className='flex items-center'>
                  <Skeleton circle={true} height={40} width={40} />
                  <div className='ml-3'>
                    <Skeleton width={100} height={20} className='mb-1' />
                    <Skeleton width={80} height={15} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Footer Skeleton */}
      <footer className='mt-10 bg-gray-100 text-gray-700'>
        <div className='container mx-auto px-4 py-8'>
          <Skeleton width='60%' height={30} className='mx-auto mb-4' />
          <div className='flex justify-center'>
            <Skeleton width='40%' height={45} className='mr-2' />
            <Skeleton width='15%' height={45} className='rounded' />
          </div>
          <Skeleton width='30%' height={15} className='mx-auto mt-8' />
        </div>
      </footer>
    </div>
  );
};

export default CarouselSkeleton;
