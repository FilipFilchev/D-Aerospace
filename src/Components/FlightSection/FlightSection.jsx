import React, { useRef, useState } from 'react';
import styles from './FlightSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import laptopImg1 from '../../Assets/GCSImg.png'
// import laptopImg2 from '../../Assets/lap.jpg'
import laptopImg3 from '../../Assets/lap1.webp'
import laptopImg4 from '../../Assets/lap3.jpg'
import '../OurProducts/Slider.css'
import lapTop from '../../Assets/laptop.png'

const FlightSection = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.slidInner}>
                    <img src={lapTop} className={styles.lapTop} alt="" />
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        centeredSlides={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // modules={[Pagination]}
                        className={styles.mySwiper}
                    >
                        <SwiperSlide cl><img src={laptopImg1} className={styles.laptopImg} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={laptopImg3} className={styles.laptopImg} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={laptopImg1} className={styles.laptopImg} alt="" /></SwiperSlide>
                        {/* <SwiperSlide><img src={laptopImg4} className={styles.laptopImg} alt="" /></SwiperSlide> */}
                    </Swiper>
                </div>

                <div className={styles.textArea}>
                    <div className={styles.recordText}>
                    Plan and record your missions with our Drone Operating System                    </div>
                    <div className={styles.moreText}>
                    Our GCSs offer comprehensive flight control and vehicle configuration capabilities for your drone. Designed to be user-friendly, it caters to beginners with its intuitive interface,  while still delivering high end feature support for experienced users.                    </div>
                </div>

            </div>
        </>
    )
}

export default FlightSection
