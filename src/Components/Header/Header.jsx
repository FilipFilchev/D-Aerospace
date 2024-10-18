import React, { useState } from 'react'
import styles from './Header.module.css'
import mainDron from '../../Assets/droneimg@2x.png'
import readyDrone from '../../Assets/droneSVGs.png'
import OldMainDrone from '../../Assets/Group 2045.png'
import buy3 from '../../Assets/mingcutesafeshieldfill.svg'
import buy2 from '../../Assets/streamlinecustomersupport1solid.svg'
import buy1 from '../../Assets/layer-2.svg'
import sidebar from '../../Assets/sidebar.png'
import plane from '../../Assets/plane.png'
import battery from '../../Assets/battery.png'
import base from '../../Assets/base.png'
import max from '../../Assets/max.png'
//import support from '../../Assets/24:7support.png'


const Header = () => {
    // const [flightArea, setFlightArea] = useState(true);
    // const [flightArea1, setFlightArea1] = useState(true);
    // const [flightArea2, setFlightArea2] = useState(true);
    // const [flightArea3, setFlightArea3] = useState(true);
    // const [flightArea4, setFlightArea4] = useState(true);

    // const flight1 = () => {
    //     setFlightArea(!flightArea);
    // };

    // const flight2 = () => {
    //     setFlightArea1(!flightArea1);
    // }
    // const flight3 = () => {
    //     setFlightArea2(!flightArea2);
    // }
    // const flight4 = () => {
    //     setFlightArea3(!flightArea3);
    // }

    // const flight5 = () => {
    //     setFlightArea4(!flightArea4);
    // }




    return (
        <>
            <div className={styles.headerBack}>
                <div className={styles.droneArea}>
                    <div className={styles.aurArea}>
                        <div className={styles.aurText}>Salvatore</div>
                        {/* <button className={styles.viewButton}>View Products</button> */}
                        <div className={styles.droneInner}>
                            <img src={readyDrone} className={styles.readyDrone} alt="" />
                            {/* <img src={OldMainDrone} className={styles.mainDron} alt="" /> */}
                            {/* {flightArea && (
                                <div className={styles.flightArea} >
                                    <img src={plane} className={styles.plane} alt="" />
                                    <div>
                                        <div className={styles.flighttext}>Max Operating Range</div>
                                        <div className={styles.meter}>20km</div>
                                    </div>
                                </div>
                            )}
                            {flightArea1 && (<div className={styles.flightArea1}>
                                <img src={battery} className={styles.battery} alt="" />
                                <div>
                                    <div className={styles.flighttext}>Battery</div>
                                    <div className={styles.meter}>up to 70Ah</div>
                                </div>
                            </div>)}
                            {flightArea2 && (<div className={styles.flightArea2}>
                                <img src={base} className={styles.base} alt="" />
                                <div>
                                    <div className={styles.flighttext}>Base</div>
                                    <div className={styles.meter}>1620mm</div>
                                </div>
                            </div>)}
                            {flightArea3 && (<div className={styles.flightArea3}>
                                <img src={plane} className={styles.plane} alt="" />
                                <div>
                                    <div className={styles.flighttext}>Max Flying Speed</div>
                                    <div className={styles.meter}>8m/s</div>
                                </div>
                            </div>)}
                            {flightArea4 && (<div className={styles.flightArea4}>
                                <img src={max} className={styles.max} alt="" />
                                <div>
                                    <div className={styles.flighttext}>Max Effective Load</div>
                                    <div className={styles.meter}>10kg</div>
                                </div>
                            </div>)} */}
                            {/* <div className={styles.dot1} onClick={flight1}></div>
                            <div className={styles.dot2} onClick={flight2}></div>
                            <div className={styles.dot3} onClick={flight3}></div>
                            <div className={styles.dot4} onClick={flight4}></div>
                            <div className={styles.dot5} onClick={flight5}></div> */}
                        </div>
                    </div>
                    <img src={sidebar} alt="" className={styles.sidebar} />
                </div>
                <div className={styles.buyArea}>
                    <div className={styles.buyInner}>
                        <img src={buy1} alt="" className={styles.buy1} />
                        <div className={styles.buyText}>Autopilot</div>
                    </div>
                    <div className={styles.buyInner}>
                        <img src={buy2} alt="" className={styles.buy2} />
                        {/* <img src={support} alt="" className={styles.buy2} /> */}
                        <div className={styles.buyText2}>Support</div>
                        {/* <div className={styles.learnText}>Learn more</div> */}
                    </div>
                    <div className={styles.buyInner}>
                        <img src={buy3} alt="" className={styles.buy2} />
                        <div className={styles.buyText}>Ai vision</div>
                        {/* <div className={styles.learnText}>Learn more</div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
