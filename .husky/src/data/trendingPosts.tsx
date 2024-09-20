// src/data/trendingPosts.ts

interface Author {
  name: string;
  title: string;
  image: string;
}

interface TrendingPost {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  author: Author;
}

const trendingPosts: TrendingPost[] = [
  {
    image: 'https://picsum.photos/800/600',
    category: 'Business, Travel',
    date: 'July 2, 2020',
    title: 'Your most unhappy customers are your greatest source of learning.',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: {
      name: 'Sergy Campbell',
      title: 'CEO and Founder',
      image: 'https://picsum.photos/45/45',
    },
  },
  {
    image: 'https://picsum.photos/800/600',
    category: 'Lifestyle, Wellness',
    date: 'July 3, 2020',
    title:
      'Success is not the key to happiness. Happiness is the key to success.',
    description:
      'In the middle of the ocean of words, separated by the unpredictable waves, there lie the untold stories.',
    author: {
      name: 'Amanda Jones',
      title: 'Editor-in-Chief',
      image: 'https://picsum.photos/45/45',
    },
  },
];

export default trendingPosts;
