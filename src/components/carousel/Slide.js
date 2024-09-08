// components/Slider/Slide.js
import React from 'react';

const Slide = ({slide}) => (
    <div className="item">
        <div className="post-entry lg:flex mb-4">
            <div className="thumbnail mb-4 lg:mb-0 lg:mr-5 flex-shrink-0">
                <a href="single.html">
                    <img
                        alt="Image"
                        className="img-fluid rounded w-full md:h-[321px] lg:h-[384px] object-cover"
                        src={slide.image}
                    />
                </a>
            </div>
            <div className="content flex flex-col justify-center">
                <div className="post-meta mb-3 text-sm text-gray-600">
                    <a className="category font-semibold" href="#">
                        {slide.category}
                    </a>{' '}
                    &mdash; <span className="date">{slide.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">
                    <a href="single.html">{slide.title}</a>
                </h2>
                <p className="mb-4">{slide.description}</p>
                <a className="post-author flex items-center text-sm text-gray-600" href="#">
                    <div className="author-pic w-12 h-12 mr-2">
                        <img alt="Image" className="rounded-full" src={slide.author.image}/>
                    </div>
                    <div className="text">
                        <strong className="block font-semibold">{slide.author.name}</strong>
                        <span className="text-xs">{slide.author.title}</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
);

export default Slide;
