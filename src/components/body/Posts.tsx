import { posts } from '@/data/Posts';
import PostItem from './PostItem';

const Posts = () => {
  return (
    <div className='grid gap-20 lg:grid-cols-3'>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
