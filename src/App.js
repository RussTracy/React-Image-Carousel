import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import './assets/css/style.css';

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

function App() {

  const slides = [
    <SwiperSlide key={`slide-1`} tag="div" className="image1">
      <section className="slide-content">
        <h1><span>Your New Year's Fitness</span> <span>Journey Starts Here</span></h1>
        <div><span>1-Year iFit Family</span> <span>Membership Included</span></div>
        <button>Shop Bestsellers</button>
      </section>
    </SwiperSlide>,
    <SwiperSlide key={`slide-2`} tag="div" className="image2">
      <section className="slide-content">
        <h1><span>Start 2021 on</span> <span>the Right Foot</span></h1>
        <div><span>Experience Automatic</span> <span>Trainer Control</span></div>
        <button>Shop the X32i</button>
      </section>
    </SwiperSlide>,
    <SwiperSlide key={`slide-3`} tag="div" className="image3">
      <section className="slide-content">
        <h1><span>Let's Make 2021 a</span> <span>More Enjoyable Ride</span></h1>
        <div><span>Choose the Perfect iFit</span> <span>Workouts for You</span></div>
        <button>Shop the S22i</button>
      </section>
    </SwiperSlide>,
    <SwiperSlide key={`slide-4`} tag="div" className="image4">
      <section className="slide-content">
        <h1><span>Begin on a High Note</span> <span>with Low-Impact Training</span></h1>
        <div><span>Work out without</span> <span>compromising joint comfort</span></div>
        <button>Shop FS14i</button>
      </section>
    </SwiperSlide>,
    <SwiperSlide key={`slide-5`} tag="div" className="image5">
      <section className="slide-content">
        <h1><span>This Is What Your</span> <span>New Year Looks Like</span></h1>
        <div><span>Experience Innovative Reflective</span> <span>Technology with Vault</span></div>
        <button>Shop Vault</button>
      </section>
    </SwiperSlide>,

  ];

  return <React.Fragment>
    <Swiper id="main" tag="section" wrapperTag="div" navigation pagination loop="true"
      autoplay={{
        "delay": 5000,
        "disableOnInteraction": true
      }}
      a11y>
      {slides}
    </Swiper>
  </React.Fragment>
}

export default App;
