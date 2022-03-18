import React, { useState } from 'react'
import "./Life.scss";
import BigPicture from '../BigPicture/BigPicture';
import Data from "../../Assets/Data/data.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

function Life() {

  const [ data ] = useState(Data.filter(obj => obj.categorie === "Trending"));
  const [num, setNum] = useState(0);

  return (
    <div className='life'>

        <BigPicture obj={data[num]} hr={false} styles={true} />
          
        {data.length>0 && 
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{delay: 2000}}
            modules={[ Autoplay]}
          >
            {data.map((obj, i) => (
              <SwiperSlide className='life__list' key={obj.id} onClick={()=>setNum(i)}>
                <img src={obj.img} alt={obj.title} />
                <div>
                  <span>Craig Bator - 27 Dec 2020</span>
                  <h3>{obj.title}</h3> 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }

        <div className="life__advertising">
            <div>
                <h3>Best Selling BLOG and MAGAZINE
                Theme of All Time</h3>
                <span>Experience the change!</span>
            </div>    
            <button>PURCHASE NOW</button>
        </div>
        
    </div>
  )
}

export default Life;