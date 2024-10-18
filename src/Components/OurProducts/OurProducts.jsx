import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import 'swiper/swiper-bundle.css';
import img1 from '../../Assets/SliderImg.png';
import img2 from '../../Assets/SliderLifterIMG.png';
import azriell from '../../Assets/azriel-2photoroom-2@2x.png'
import img4 from '../../Assets/SliderImg3.png';
import img5 from '../../Assets/SliderImg5.png';
// import salvatore from '../../Assets/DroneIMG.png';
import salvatore from '../../Assets/salvatoreIMG.png';
import azriel from '../../Assets/azrielimg.JPG';
import styles from './OurProducts.module.css';
import './Slider.css'


const OurProducts = () => {

    const [sliderSettings, setSliderSettings] = useState({
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: "60px",
        speed: 500,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    });

    return (
        <>
            <div className={styles.swipArea}>
                <div className={styles.TextArea}>
                    <div className={styles.ourText}>Our Products</div>
                    <div className={styles.loremText}>
                    D Aerospace offers cutting-edge drones for industrial use. Our flagship drones Azriel and Salvatore boasts robust construction, autonomous capabilities, and exceptional performance. Empowering users with advanced technology and customization options, our drones excel in challenging environments, setting the standard for reliability and efficiency in the industry.                   </div>
                </div>
            </div>
            <Slider {...sliderSettings} className="slidermian">
                <div className="sliderOuter">
                    <img src={salvatore} className={styles.salvatore} alt="" />
                    <button className="spiderBtnSal">Salvatore</button>
                </div>
                <div className="sliderOuter">
                    <img src={azriell} className={styles.azriel} alt="" />
                    <button className="spiderBtn">Azriel</button>
                </div>
                <div className="sliderOuter">
                    <img src={img1} className={styles.azriel} alt="" />
                    <button className="spiderBtn">Iris</button>
                </div>
                <div className="sliderOuter">
                    <img src={img2} className={styles.lifter} alt="" />
                    <button className="spiderBtn">Lifter</button>
                </div>
            </Slider>
        </>
    );
}

export default OurProducts
