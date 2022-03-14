import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import './Jumbotron.scss';

// swipper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Jumbotron() {
  return (
    <div className='container'>
        <div className="jumbotron">
            <div className='jumbotron__left'>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    autoplay={{delay: 1000}}
                    pagination={{clickable: true}}
                >
                    <SwiperSlide>
                        <div className="jumbotron__left-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK525GaqYCaz-uKhSOcsatpkDQfKr8u67HUw&usqp=CAU" alt="one" />  
                            <span>Craig Bator - 27 Dec 2020</span>
                            <h1>After all is said and done, more is
                            done</h1>  
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="jumbotron__left-item">
                            <img src="data:image/jpeg;base64,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" alt="two" />  
                            <span>Craig Bator - 02 YUN 2022</span>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>  
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="jumbotron__left-item">
                            <img src="data:image/jpeg;base64,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" alt="two" />  
                            <span>Craig Bator - 02 YUN 2022</span>
                            <h1>Ipsum dolor sit, amet consectetur adipisicing.</h1>  
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='jumbotron__right'>
                <div className="jumbotron__box">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        autoplay={{delay: 1000}}
                        pagination={{clickable: true}}
                    >
                        <SwiperSlide>
                            <div className="jumbotron__box-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-paE08sr6uqx0fLRSFdHBW3LawOI7o5YhsVda8Yv7Wllmi3EgN3WWYYn0qTSm1GqreGk&usqp=CAU" alt="" />
                                <span>Craig Bator - 27 Dec 2022</span>
                                <h3>They’re back! Kennedy Darling
                                    named to return to</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="jumbotron__box-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-paE08sr6uqx0fLRSFdHBW3LawOI7o5YhsVda8Yv7Wllmi3EgN3WWYYn0qTSm1GqreGk&usqp=CAU" alt="" />
                                <span>Craig Bator - 27 Dec 2022</span>
                                <h3>They’re back! Kennedy Darling
                                    named to return to</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="jumbotron__box-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-paE08sr6uqx0fLRSFdHBW3LawOI7o5YhsVda8Yv7Wllmi3EgN3WWYYn0qTSm1GqreGk&usqp=CAU" alt="" />
                                <span>Craig Bator - 27 Dec 2022</span>
                                <h3>They’re back! Kennedy Darling
                                    named to return to</h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        autoplay={{delay: 1000}}
                        pagination={{clickable: true}}
                    >
                        <SwiperSlide>
                            <div className="jumbotron__box-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-paE08sr6uqx0fLRSFdHBW3LawOI7o5YhsVda8Yv7Wllmi3EgN3WWYYn0qTSm1GqreGk&usqp=CAU" alt="" />
                                <span>Craig Bator - 27 Dec 2022</span>
                                <h3>They’re back! Kennedy Darling
                                    named to return to</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="jumbotron__box-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-paE08sr6uqx0fLRSFdHBW3LawOI7o5YhsVda8Yv7Wllmi3EgN3WWYYn0qTSm1GqreGk&usqp=CAU" alt="" />
                                <span>Craig Bator - 27 Dec 2022</span>
                                <h3>They’re back! Kennedy Darling
                                    named to return to</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="jumbotron__box-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-paE08sr6uqx0fLRSFdHBW3LawOI7o5YhsVda8Yv7Wllmi3EgN3WWYYn0qTSm1GqreGk&usqp=CAU" alt="" />
                                <span>Craig Bator - 27 Dec 2022</span>
                                <h3>They’re back! Kennedy Darling
                                    named to return to</h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="jumbotron__content">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        autoplay={{delay: 1000}}
                        pagination={{clickable: true}}
                    >
                        <SwiperSlide>
                            <div className="jumbotron__content-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQBMJJw3CsZbJ1rfbddHde2qbPjq8gmWT_S8058muJ6qkCyq4mtgmWODALqExozWQ79w&usqp=CAU" alt="" />
                                <span>Craig Bator - 27 Dec 2022</span>
                                <h2>They’re back! Kennedy Darling
                                    named to return to</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="jumbotron__content-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQBMJJw3CsZbJ1rfbddHde2qbPjq8gmWT_S8058muJ6qkCyq4mtgmWODALqExozWQ79w&usqp=CAU" alt="" />
                                <span>Craig Bator - 27 Dec 2022</span>
                                <h2>They’re back! Kennedy Darling
                                    named to return to</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="jumbotron__content-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQBMJJw3CsZbJ1rfbddHde2qbPjq8gmWT_S8058muJ6qkCyq4mtgmWODALqExozWQ79w&usqp=CAU" alt="" />
                                <span>Craig Bator - 27 Dec 2022</span>
                                <h2>They’re back! Kennedy Darling
                                    named to return to</h2>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Jumbotron