import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './assets/css/style.css';

SwiperCore.use([Navigation, Pagination]);

function App() {

  const slides = [
    <SwiperSlide key={`slide-1`} tag="div" className="image1">

    </SwiperSlide>,
    <SwiperSlide key={`slide-2`} tag="div" className="image2">

    </SwiperSlide>,
    <SwiperSlide key={`slide-3`} tag="div" className="image3">

    </SwiperSlide>,
    <SwiperSlide key={`slide-4`} tag="div" className="image4">

    </SwiperSlide>,
    <SwiperSlide key={`slide-5`} tag="div" className="image5">

    </SwiperSlide>,

  ];

  return <React.Fragment>
    <Swiper id="main" tag="section" wrapperTag="div" navigation pagination loop="true" >
      {slides}
    </Swiper>
  </React.Fragment>
}

export default App;
