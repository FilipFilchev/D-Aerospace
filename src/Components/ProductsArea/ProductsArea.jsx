import React from 'react'
import styles from './ProductsArea.module.css'
import bgn from '../../Assets/RectangleBlack.png'
import drone1 from '../../Assets/SalvatoreIMG2.png'
import azriel from '../../Assets/AzrielCorner.png'
import lifter from '../../Assets/LifterIMG2.png'
import drone2 from '../../Assets/droneLeft.png'
import fly1 from '../../Assets/flyer1.png'
import fly2 from '../../Assets/flyer2.png'
import fly3 from '../../Assets/flyer3.png'
import fly4 from '../../Assets/flyer4.png'
import drawings1 from '../../Assets/SalvatoreSketch.png'
import drawings2 from '../../Assets/AzrielDrawings.png'
import drawings3 from '../../Assets/LifterDrawings.png'




const ProductsArea = () => {
    return (
        <>
            <div className={styles.productMain}>
                <div className={styles.solveArea}>
                    <div className={styles.soveHeader}>
                    
                        <div className={styles.solveText}>Salvatore</div>
                        <div className={styles.reliText}>
                            A reliable and compact drone that gives you the power to go further and reach higher without worrying about unpredictable weather conditions.
                        </div>
                        <img src={bgn} alt="" className={styles.bgn} />
                        <img src={drone1} alt="" className={styles.drone0} />
                    </div>
                    <div className={styles.flyrArea}>
                        <div className={styles.flyinner}>
                            <img src={fly1} alt="" className={styles.fly1} />
                            <div className={styles.maxText}>Operating Range</div>
                            <div className={styles.minutText}>20 km</div>
                        </div>
                        <div className={styles.flyinner}>
                            <img src={fly2} alt="" className={styles.fly2} />
                            <div className={styles.maxText}>Max Payload Capability</div>
                            <div className={styles.minutText}>~10 kg</div>
                        </div>
                        <div className={styles.flyinner}>
                            <img src={fly3} alt="" className={styles.fly3} />
                            <div className={styles.maxText}>Flight Controller</div>
                            {/* <div className={styles.maxText1}>Cube Orange</div> */}
                            <div className={styles.minutText}>Cube Orange</div>
                        </div>
                        <div className={styles.flyinner}>
                            <img src={fly4} alt="" className={styles.fly4} />
                            <div className={styles.maxText}>Max Flight Time</div>
                            <div className={styles.minutText}>60 minutes</div>
                        </div>
                    </div>
                    <img src={drawings1} alt="" className={styles.soldimensions} />
                </div>
                <div className={styles.solveArea1}>
                    <div className={styles.soveHeader1}>
                        <div className={styles.arilaContent}>
                            <div className={styles.solveText2}>Azriel</div>
                            <div className={styles.reliText2}>
                            Introducing our advanced dual-battery and dual-GPS drone model, designed to revolutionize automation with cutting-edge AI-driven computer vision and mission planning, ensuring exceptional efficiency and safety for your most critical operations.                            </div>
                        </div>
                        <img src={bgn} alt="" className={styles.bgn2} />
                        <img src={azriel} alt="" className={styles.drone2} />
                    </div>
                    <div className={styles.flyrArea1}>
                        <div className={styles.flyinner}>
                            <img src={fly1} alt="" className={styles.fly1} />
                            <div className={styles.maxText}>Operating Range</div>
                            <div className={styles.minutText}>20 km</div>
                        </div>
                        <div className={styles.flyinner}>
                            <img src={fly2} alt="" className={styles.fly2} />
                            <div className={styles.maxText}>Max Payload Capability</div>
                            {/* <div className={styles.maxText1}>Capability</div> */}
                            <div className={styles.minutText}>~15 kg</div>
                        </div>
                        <div className={styles.flyinner}>
                            <img src={fly3} alt="" className={styles.fly11} />
                            <div className={styles.maxText}>Flight Controller</div>
                            <div className={styles.minutText}>AI Enhanced Linux FC</div>
                        </div>
                        <div className={styles.flyinner}>
                            <img src={fly4} alt="" className={styles.fly2} />
                            <div className={styles.maxText}>Max Flight Time</div>
                            <div className={styles.minutText}>40 minutes</div>
                        </div>
                    </div>
                    <img src={drawings2} alt="" className={styles.soldimensions2} />
                </div>
                <div className={styles.solveArea}>
                    <div className={styles.soveHeader}>
                    
                        <div className={styles.solveText}>Lifter</div>
                        <div className={styles.reliText}>
                        A reliable and compact drone that gives you the power to go further and reach higher without worrying about unpredictable weather conditions.                        </div>
                        <img src={bgn} alt="" className={styles.bgn} />
                        <img src={lifter} alt="" className={styles.drone1} />
                    </div>
                    <div className={styles.flyrArea}>
                        <div className={styles.flyinner}>
                            <img src={fly1} alt="" className={styles.fly1} />
                            <div className={styles.maxText}>Operating Range</div>
                            <div className={styles.minutText}>10 km</div>
                        </div>
                        <div className={styles.flyinner}>
                            <img src={fly2} alt="" className={styles.fly2} />
                            <div className={styles.maxText}>Max Payload Capability</div>
                            <div className={styles.minutText}>~40 kg</div>
                        </div>
                        <div className={styles.flyinner}>
                            <img src={fly3} alt="" className={styles.fly3} />
                            <div className={styles.maxText}>Flight Controller</div>
                            {/* <div className={styles.maxText1}>Cube Orange</div> */}
                            <div className={styles.minutText}>Cube Orange</div>
                        </div>
                        <div className={styles.flyinner}>
                            <img src={fly4} alt="" className={styles.fly4} />
                            <div className={styles.maxText}>Max Flight Time</div>
                            <div className={styles.minutText}>30 minutes</div>
                        </div>
                    </div>
                    <img src={drawings1} alt="" className={styles.soldimensions} />
                </div>
            </div>
        </>
    )
}

export default ProductsArea
