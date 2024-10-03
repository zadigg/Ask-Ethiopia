interface PostCardProps {
  post: any;
}

const PostCard = ({ post }: PostCardProps) => (
  <div className='h-auto p-4'>
    <div className='mb-7'>
      <a href='single.html'>
        <img
          alt='Post Thumbnail'
          className='img-fluid mx-auto max-h-[386px] w-full rounded-lg md:w-[697px]'
          src={post.image}
          loading='lazy'
        />
      </a>
    </div>
    <div className='mx-auto flex flex-col md:w-[697px] lg:w-full'>
      <div className='mb-1 text-sm'>
        {post.categories.map((category: string, index: number) => (
          <a
            key={index}
            className='font-semibold text-gray-800 hover:text-gray-600'
            href='single.html'
          >
            {category}
            {index < post.categories.length - 1 && ', '}
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
    </div>
  </div>
);

export default PostCard;
