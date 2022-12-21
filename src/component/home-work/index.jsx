import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function homeWork() {
  return (
    <div className="page-2">
      <div className="container">
        <div className="text-box-3">
          <h2>Check out our latest works </h2>
          <p>Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor.</p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6  col-sm-6 image-box">
            <img src="https://picsum.photos/seed/picsum/540/270" alt="" />
            <div className="border-box">
              <p>Grant Motel  gets an identity brushup <br /><span>Identity </span></p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 image-box">
            <img src="https://picsum.photos/seed/picsum/540/270" alt="" />
            <div className="border-box">
              <p>Grant Motel  gets an identity brushup <br /> <span>Identity</span></p>
            </div>
          </div>
        </div>
        <div className='slider-bottom'>

          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src="https://picsum.photos/seed/picsum/540/270" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://picsum.photos/seed/picsum/540/270" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://picsum.photos/seed/picsum/540/270" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://picsum.photos/seed/picsum/540/270" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://picsum.photos/seed/picsum/540/270" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://picsum.photos/seed/picsum/540/270" alt="" />
            </SwiperSlide>





          </Swiper>
        </div>


      </div>
    </div>
  )
}

export default homeWork