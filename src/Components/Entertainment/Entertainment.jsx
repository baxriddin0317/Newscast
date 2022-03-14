import React, { useState } from 'react'
import BigPicture from '../BigPicture/BigPicture';
import './Entertainment.scss';
import Data from '../../Assets/Data/data.json';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

function Entertainment() {

  const [info, setInfo] = useState(Data.filter(obj => obj.categorie === "Entertainment"));
  const [index, setIndex] = useState(0);

  return (
    <div className='enter'>
        <BigPicture obj={info[index]} />

        {info.length>0 && 
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            autoplay={{delay: 2000}}
            modules={[Navigation, Autoplay]}
          >
            {info.map((obj, i) => (
              <SwiperSlide className='enter__item' key={obj.id} onClick={()=>setIndex(i)}>
                <img src={obj.img} alt={obj.title} />
                <div>
                  <span>Craig Bator - 27 Dec 2020</span>
                  <h3>{obj.title}</h3> 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
    </div>
  )
}

export default Entertainment