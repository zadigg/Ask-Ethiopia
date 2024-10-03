import PostCard from './PostCard';

interface GridSectionProps {
  posts: any[];
}

const GridSection = ({ posts }: GridSectionProps) => (
  <div className='grid grid-cols-1 gap-4 gap-y-10 lg:grid-cols-3'>
    {posts.map((post, index) => (
      <PostCard key={index} post={post} />
    ))}
  </div>
);

export default GridSection;
