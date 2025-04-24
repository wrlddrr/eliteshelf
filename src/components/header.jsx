import { useState, useEffect } from 'react';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 pt-24 pb-8 sm:pt-20 sm:pb-10">
      {/* Carousel Section */}
      <div className="relative overflow-hidden rounded-xl shadow-md">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white text-3xl font-semibold"
            >
              Slide {index + 1}
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
