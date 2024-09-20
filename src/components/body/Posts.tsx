interface Post {
  image: string;
  categories: string[];
  date: string;
  title: string;
  description: string;
  authorImage: string;
  authorName: string;
  authorTitle: string;
}

const Posts = () => {
  const posts: Post[] = [
    {
      image: 'https://picsum.photos/440/300',
      categories: ['Business', 'Travel'],
      date: 'July 2, 2020',
      title:
        'Your most unhappy customers are your greatest source of learning.',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      authorImage: 'https://picsum.photos/45/45',
      authorName: 'Sergy Campbell',
      authorTitle: 'CEO and Founder',
    },
    {
      image: 'https://picsum.photos/440/300',
      categories: ['Business', 'Travel'],
      date: 'July 2, 2020',
      title:
        'Your most unhappy customers are your greatest source of learning.',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      authorImage: 'https://picsum.photos/45/45',
      authorName: 'Sergy Campbell',
      authorTitle: 'CEO and Founder',
    },
    {
      image: 'https://picsum.photos/440/300',
      categories: ['Business', 'Travel'],
      date: 'July 2, 2020',
      title:
        'Your most unhappy customers are your greatest source of learning.',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      authorImage: 'https://picsum.photos/45/45',
      authorName: 'Sergy Campbell',
      authorTitle: 'CEO and Founder',
    },
    {
      image: 'https://picsum.photos/440/300',
      categories: ['Business', 'Travel'],
      date: 'July 2, 2020',
      title:
        'Your most unhappy customers are your greatest source of learning.',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      authorImage: 'https://picsum.photos/45/45',
      authorName: 'Sergy Campbell',
      authorTitle: 'CEO and Founder',
    },
    {
      image: 'https://picsum.photos/440/300',
      categories: ['Business', 'Travel'],
      date: 'July 2, 2020',
      title:
        'Your most unhappy customers are your greatest source of learning.',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      authorImage: 'https://picsum.photos/45/45',
      authorName: 'Sergy Campbell',
      authorTitle: 'CEO and Founder',
    },
    {
      image: 'https://picsum.photos/440/300',
      categories: ['Business', 'Travel'],
      date: 'July 2, 2020',
      title:
        'Your most unhappy customers are your greatest source of learning.',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      authorImage: 'https://picsum.photos/45/45',
      authorName: 'Sergy Campbell',
      authorTitle: 'CEO and Founder',
    },
  ];

  return (
    <div className='py-28'>
      <div className='container mx-auto px-10'>
        <div className='grid gap-20 lg:grid-cols-3'>
          {posts.map(
            (
              {
                image,
                categories,
                date,
                title,
                description,
                authorImage,
                authorName,
                authorTitle,
              },
              index,
            ) => (
              <div key={index} className='post-entry flex flex-col'>
                <div className='mb-7'>
                  <a href='single.html'>
                    <img
                      alt='Post Thumbnail'
                      className='h-auto w-full rounded-lg'
                      src={image}
                      loading='lazy'
                    />
                  </a>
                </div>
                <div className='flex flex-col'>
                  <div className='mb-1 text-sm'>
                    {categories.map((category, catIndex) => (
                      <a
                        key={catIndex}
                        className='font-semibold text-gray-800 hover:text-gray-600'
                        href='single.html'
                      >
                        {category}
                        {catIndex < categories.length - 1 && ', '}
                      </a>
                    ))}
                    <span className='ml-2'>— {date}</span>
                  </div>
                  <h2 className='mb-3 text-lg font-bold'>
                    <a href='single.html' className='hover:underline'>
                      {title}
                    </a>
                  </h2>
                  <p className='mb-5'>{description}</p>
                  <a className='flex items-center' href='single.html'>
                    <div className='flex-shrink-0'>
                      <img
                        alt='Author'
                        className='h-12 w-12 rounded-full'
                        src={authorImage}
                      />
                    </div>
                    <div className='ml-3'>
                      <strong className='block font-bold text-gray-900'>
                        {authorName}
                      </strong>
                      <span className='text-sm text-gray-600'>
                        {authorTitle}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
