interface Post {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  author: {
    image: string;
    name: string;
    title: string;
  };
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      <div className='post-entry lg:flex'>
        <div className='mb-4 flex-shrink-0 lg:mb-0 lg:mr-5'>
          <a href='single.html'>
            <img
              alt='carousel slider image'
              className='img-fluid h-auto w-full rounded-lg lg:w-[440px]'
              src={post.image}
            />
          </a>
        </div>
        <div className='content align-self-center flex flex-col justify-center'>
          <div className='post-meta mb-3'>
            <a
              className='category mr-1 font-semibold text-gray-800 hover:text-gray-600'
              href='single.html'
            >
              {post.category}
            </a>
            &mdash; <span className='date ml-2 text-gray-600'>{post.date}</span>
          </div>
          <h2 className='heading mb-3 text-2xl font-bold'>
            <a href='single.html' className='hover:underline'>
              {post.title}
            </a>
          </h2>
          <p className='mb-5'>{post.description}</p>
          <a
            className='post-author flex items-center hover:text-gray-800'
            href='single.html'
          >
            <div className='author-pic mr-3'>
              <img
                alt='carousel author image'
                className='h-12 w-12 rounded-full'
                src={post.author.image}
              />
            </div>
            <div className='text'>
              <strong className='block font-bold text-gray-900'>
                {post.author.name}
              </strong>
              <span className='text-sm text-gray-600'>{post.author.title}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
