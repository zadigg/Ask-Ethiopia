const NavigationDots = ({slides, activeIndex, goToSlide}) => (
    <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 p-1 rounded-full ${activeIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            ></button>
        ))}
    </div>
);

export default NavigationDots;
