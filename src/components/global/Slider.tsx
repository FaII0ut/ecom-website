import React, { useState, useEffect } from 'react';

interface SliderProps {
  items: string[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative w-full h-[788px] overflow-hidden flex items-center justify-center">
      <div
        className="absolute w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={item}
              alt={`Slide ${index}`}
              className="w-full h-[788px] object-cover"
              style={{ maxWidth: '1773px', maxHeight: '788px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
