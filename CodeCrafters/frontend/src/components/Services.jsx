import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Services = () => {
  return (
    <>
      <h1 className='text-center mt-10 text-3xl' data-aos="flip-up">What We Will Do.</h1>
      {/* <div className="services">
        <div className="service relative" data-aos="fade-right">
          <h3 className='text-2xl mt-3'>Web Development</h3>
          <p className='mt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et perspiciatis deserunt provident qui aspernatur dolor, quibusdam veniam ea fugit sint, laboriosam ex, error consequuntur! Error harum soluta commodi. Dicta, perferendis similique.</p>
          <div className="absolute bottom-4 flex items-center gap-2">
            <h3>Contact Us {">"} </h3>
            <button className="btn ml-36">Contact</button>
          </div>
        </div>

        <div className="service relative" data-aos="fade-up">
          <h3 className='text-2xl mt-3'>App Development</h3>
          <p className='mt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et perspiciatis deserunt provident qui aspernatur dolor, quibusdam veniam ea fugit sint, laboriosam ex, error consequuntur! Error harum soluta commodi. Dicta, perferendis similique.</p>
          <div className="absolute bottom-4 flex items-center gap-2">
            <h3>Contact Us {">"} </h3>
            <button className="btn ml-36">Contact</button>
          </div>
        </div>

        <div className="service relative" data-aos="fade-left">
          <h3 className='text-2xl mt-3'>UI/UX Development</h3>
          <p className='mt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et perspiciatis deserunt provident qui aspernatur dolor, quibusdam veniam ea fugit sint, laboriosam ex, error consequuntur! Error harum soluta commodi. Dicta, perferendis similique.</p>
          <div className="absolute bottom-4 flex items-center gap-2">
            <h3>Contact Us {">"} </h3>
            <button className="btn ml-36">Contact</button>
          </div> 
        </div>

      </div> */}
      <div className="services">

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}

          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}

          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="service relative" data-aos="fade-right">
              <h3 className='text-2xl mt-3'>Web Development</h3>
              <p className='mt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et perspiciatis deserunt provident qui aspernatur dolor, quibusdam veniam ea fugit sint, laboriosam ex, error consequuntur! Error harum soluta commodi. Dicta, perferendis similique.</p>
              <div className="absolute bottom-4 flex items-center gap-2">
                <h3>Contact Us {">"} </h3>
                <button className="btn ml-36">Contact</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service relative" data-aos="fade-right">
              <h3 className='text-2xl mt-3'>Web Development</h3>
              <p className='mt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et perspiciatis deserunt provident qui aspernatur dolor, quibusdam veniam ea fugit sint, laboriosam ex, error consequuntur! Error harum soluta commodi. Dicta, perferendis similique.</p>
              <div className="absolute bottom-4 flex items-center gap-2">
                <h3>Contact Us {">"} </h3>
                <button className="btn ml-36">Contact</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service relative" data-aos="fade-right">
              <h3 className='text-2xl mt-3'>Web Development</h3>
              <p className='mt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et perspiciatis deserunt provident qui aspernatur dolor, quibusdam veniam ea fugit sint, laboriosam ex, error consequuntur! Error harum soluta commodi. Dicta, perferendis similique.</p>
              <div className="absolute bottom-4 flex items-center gap-2">
                <h3>Contact Us {">"} </h3>
                <button className="btn ml-36">Contact</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service relative" data-aos="fade-right">
              <h3 className='text-2xl mt-3'>Web Development</h3>
              <p className='mt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et perspiciatis deserunt provident qui aspernatur dolor, quibusdam veniam ea fugit sint, laboriosam ex, error consequuntur! Error harum soluta commodi. Dicta, perferendis similique.</p>
              <div className="absolute bottom-4 flex items-center gap-2">
                <h3>Contact Us {">"} </h3>
                <button className="btn ml-36">Contact</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  )
}

export default Services