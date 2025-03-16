import { useState, useEffect, useCallback } from "react";
import "../scss/component/trendslider.scss";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import img1 from "../images/t3.webp";
import img2 from "../images/t2.jpg";
import img3 from "../images/trendingbackground.jpg";
import img4 from "../images/t4.jpg";
import img5 from "../images/t5.jpg";
 import img6 from "../images/t6.jpg";


const IMAGES = [img1, img2, img3, img4, img5,img6];

export function Slider(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  //Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext]);
  return(
<div className="slider-container">
  <div className="search">
  <input className="search-bar" type="search" placeholder="Search artists,songs,albums...." />
  <Search className="search-icon" color="black"/>
  </div>
        <div className="slider">
          {IMAGES.map((image, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        
        <button className="slider-button prev" onClick={goToPrevious}>
          <ChevronLeft />
        </button>
        
        <button className="slider-button next" onClick={goToNext}>
          <ChevronRight />
        </button>
        
        <div className="slider-dots">
          {IMAGES.map((_, index) => (
            <button 
              key={index} 
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
  )
}