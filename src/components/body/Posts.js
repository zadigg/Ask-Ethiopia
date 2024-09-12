import React from 'react';

const Posts = () => {
    const posts = [
        {
            image: 'https://picsum.photos/440/300', // Post image with dynamic width and height
            categories: ['Business', 'Travel'],
            date: 'July 2, 2020',
            title: 'Your most unhappy customers are your greatest source of learning.',
            description:
                'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            authorImage: 'https://picsum.photos/45/45', // Author image with dynamic size
            authorName: 'Sergy Campbell',
            authorTitle: 'CEO and Founder',
        },
        {
            image: 'https://picsum.photos/440/300',
            categories: ['Business', 'Travel'],
            date: 'July 2, 2020',
            title: 'Your most unhappy customers are your greatest source of learning.',
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
            title: 'Your most unhappy customers are your greatest source of learning.',
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
            title: 'Your most unhappy customers are your greatest source of learning.',
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
            title: 'Your most unhappy customers are your greatest source of learning.',
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
            title: 'Your most unhappy customers are your greatest source of learning.',
            description:
                'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            authorImage: 'https://picsum.photos/45/45',
            authorName: 'Sergy Campbell',
            authorTitle: 'CEO and Founder',
        },
    ];

    return (
        <div className="py-28">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-20">
                    {posts.map((post, index) => (
                        <div key={index} className="post-entry flex flex-col">
                            <div className="mb-7">
                                <a href="single.html">
                                    <img
                                        alt="Post Thumbnail"
                                        className="w-full h-auto rounded-lg"
                                        src={post.image}
                                    />
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-sm mb-1">
                                    {post.categories.map((category, catIndex) => (
                                        <a
                                            key={catIndex}
                                            className="font-semibold text-gray-800 hover:text-gray-600"
                                            href="#"
                                        >
                                            {category}
                                            {catIndex < post.categories.length - 1 && ', '}
                                        </a>
                                    ))}
                                    <span className="ml-2">— {post.date}</span>
                                </div>
                                <h2 className="text-lg font-bold mb-3">
                                    <a href="single.html" className="hover:underline">
                                        {post.title}
                                    </a>
                                </h2>
                                <p className="mb-5">{post.description}</p>
                                <a className="flex items-center" href="#">
                                    <div className="flex-shrink-0">
                                        <img
                                            alt="Author"
                                            className="w-12 h-12 rounded-full"
                                            src={post.authorImage}
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <strong className="block font-bold text-gray-900">
                                            {post.authorName}
                                        </strong>
                                        <span className="text-sm text-gray-600">
                      {post.authorTitle}
                    </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Posts;
