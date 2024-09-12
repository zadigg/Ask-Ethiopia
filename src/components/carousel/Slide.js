const Slide = ({slide}) => (
    <div className="item mb-10">
        <div className="post-entry lg:flex">
            <div className="lg:mr-5 mb-4 lg:mb-0 flex-shrink-0">
                <a href="single.html">
                    <img
                        alt="carousel slider image"
                        className="img-fluid rounded-lg w-full lg:w-[440px] h-auto"
                        src={slide.image}
                    />
                </a>
            </div>
            <div className="content align-self-center flex flex-col justify-center">
                <div className="post-meta mb-3">
                    <a className="category text-gray-800 font-semibold hover:text-gray-600 mr-1"
                       href="single.html">
                        {slide.category}
                    </a>{' '}
                    &mdash; <span className="date text-gray-600 ml-2">{slide.date}</span>
                </div>
                <h2 className="heading text-2xl font-bold mb-3">
                    <a href="single.html" className="hover:underline">{slide.title}</a>
                </h2>
                <p className="mb-5">{slide.description}</p>
                <a className="post-author flex items-center hover:text-gray-800" href="single.html">
                    <div className="author-pic mr-3">
                        <img alt="carousel author image" className="w-12 h-12 rounded-full" src={slide.author.image}/>
                    </div>
                    <div className="text">
                        <strong className="block text-gray-900 font-bold">{slide.author.name}</strong>
                        <span className="text-sm text-gray-600">{slide.author.title}</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
);

export default Slide;
