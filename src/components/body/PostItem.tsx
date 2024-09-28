import { type Post } from '@/data/Posts';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className='mx-auto flex  flex-col md:w-[697px]  lg:w-[300px] xl:w-[400px]'>
      <div className='mb-7'>
        <a href='single.html'>
          <img
            alt='Post Thumbnail'
            className='img-fluid mx-auto max-h-[386px] w-full rounded-lg  '
            src={post.image}
            loading='lazy'
          />
        </a>
      </div>
      <div className='flex flex-col '>
        <div className='mb-1 text-sm'>
          {post.categories.map((category, catIndex) => (
            <a
              key={catIndex}
              className='font-semibold text-gray-800 hover:text-gray-600'
              href='single.html'
            >
              {category}
              {catIndex < post.categories.length - 1 && ', '}
            </a>
          ))}
          <span className='ml-2'>— {post.date}</span>
        </div>
        <h2 className='mb-3 text-lg font-bold'>
          <a href='single.html' className='hover:underline'>
            {post.title}
          </a>
        </h2>
        <p className='mb-5'>{post.description}</p>
        <a className='flex items-center' href='single.html'>
          <div className='flex-shrink-0'>
            <img
              alt='Author'
              className='h-12 w-12 rounded-full'
              src={post.authorImage}
            />
          </div>
          <div className='ml-3'>
            <strong className='block font-bold text-gray-900'>
              {post.authorName}
            </strong>
            <span className='text-sm text-gray-600'>{post.authorTitle}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PostItem;
