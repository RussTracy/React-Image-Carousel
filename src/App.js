import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './assets/css/style.css';

import image1 from './assets/images/hero_1_md.jpg'
import image2 from './assets/images/hero_2_md.jpg'
import image3 from './assets/images/hero_3_md.jpg'

SwiperCore.use([Navigation, Pagination]);

function App() {

  const slides = [
    // image1, image2, image3

  ];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        {/* <img src={`./assets/images/hero_${i + 1}_md.jpg`} className="App-logo" alt="logo" /> */}
        <img src={image1} className="App-logo" alt="logo" />
      </SwiperSlide>
    )
  }

  return <React.Fragment>
    <Swiper id="main" tag="section" wrapperTag="ul" navigation pagination >
      {slides}

    </Swiper>
  </React.Fragment>
}

export default App;
