import React from 'react'
import Data from '../../Assets/Data/data.json';
import './Slider.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

function Slider() {
  return (
    <div className='slider'>
        {Data.length>0 && 
          <Swiper
            slidesPerView={5}
            // spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{delay: 3000}}
            modules={[ Autoplay]}
          >
            {Data.map((obj, i) => (
              <SwiperSlide className='slider__item' key={obj.id}>
                <img src={obj.img} alt={obj.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        }

        <div className="slider__link">
            <a href="https://www.instagram.com/">
            <i className='bx bxl-instagram-alt'></i>
            follow us
            </a>
        </div>
    </div>
  )
}

export default Slider