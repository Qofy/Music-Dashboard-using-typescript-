import { useState, useEffect, useCallback } from "react";
import "../scss/component/trendslider.scss";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { SliderProps } from "../types";
import img1 from "../images/t3.webp";
import img2 from "../images/t2.jpg";
import img3 from "../images/trendingbackground.jpg";
import img4 from "../images/t4.jpg";
import img5 from "../images/t5.jpg";
import img6 from "../images/t6.jpg";

const DEFAULT_IMAGES = [img1, img2, img3, img4, img5, img6];

interface SliderComponentProps extends Partial<SliderProps> {
  images?: string[];
}

export function Slider({ 
  images = DEFAULT_IMAGES, 
  autoPlay = true, 
  interval = 5000 
}: SliderComponentProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto Slider
  useEffect(() => {
    if (!autoPlay) return;
    
    const slideInterval = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [goToNext, autoPlay, interval]);
  return(
    <div className="slider-container">
      <div className="search">
        <input 
          className="search-bar" 
          type="search" 
          placeholder="Search artists, songs, albums...." 
          aria-label="Search music"
        />
        <Search className="search-icon" color="black" aria-hidden="true" />
      </div>
      
      <div className="slider" role="region" aria-label="Featured content slider">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
            aria-hidden={index !== currentIndex}
          >
            <img 
              src={image} 
              alt={`Featured slide ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
      
      <button 
        className="slider-button prev" 
        onClick={goToPrevious}
        aria-label="Previous slide"
        type="button"
      >
        <ChevronLeft aria-hidden="true" />
      </button>
      
      <button 
        className="slider-button next" 
        onClick={goToNext}
        aria-label="Next slide"
        type="button"
      >
        <ChevronRight aria-hidden="true" />
      </button>
      
      <div className="slider-dots" role="tablist" aria-label="Slide navigation">
        {images.map((_, index) => (
          <button 
            key={index} 
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentIndex}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </div>
  )
}