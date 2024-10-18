import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import styles from './PixSection.module.css';
import drone1 from '../../Assets/dron1.png';
import drone2 from '../../Assets/dron2.png';
import drone3 from '../../Assets/skydroid-h16photoroom-1@2x.png'

const animationConfig = { ...config.default, duration: 600, delay: 500 };

const PixSection = () => {
    const [ref1, inView1] = useInView({
        threshold: 0.5, // Adjust this value as needed
    });

    const [ref2, inView2] = useInView({
        threshold: 0.5, // Adjust this value as needed
    });

    const [ref3, inView3] = useInView({
        threshold: 0.5, // Adjust this value as needed
    });

    const child1Props = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'translateX(0)' : 'translateX(-100%)',
        config: animationConfig,
    });

    const child2Props = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'translateX(0)' : 'translateX(100%)',
        config: animationConfig,
    });

    const props1 = useSpring({
        opacity: inView1 ? 1 : 0,
        config: animationConfig,
    });

    const child3Props = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'translateX(0)' : 'translateX(-100%)',
        config: animationConfig,
    });

    const child4Props = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'translateX(0)' : 'translateX(100%)',
        config: animationConfig,
    });

    const props2 = useSpring({
        opacity: inView2 ? 1 : 0,
        config: animationConfig,
    });

    const child5Props = useSpring({
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'translateX(0)' : 'translateX(-100%)',
        config: animationConfig,
    });

    const child6Props = useSpring({
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'translateX(0)' : 'translateX(100%)',
        config: animationConfig,
    });

    const props3 = useSpring({
        opacity: inView3 ? 1 : 0,
        config: animationConfig,
    });

    return (
        <div className={styles.pixOuter}>
            <animated.div className={styles.pixInner} ref={ref1} style={props1}>
                <animated.div style={child1Props}>
                    <img src={drone1} className={styles.drone1} alt="" />

                </animated.div>
                <animated.div style={child2Props}>
                    <div className={styles.textArea}>
                        <div className={styles.pixtext}>Pixhawk Flight Controller</div>
                        <div className={styles.cusText}>
                            Salvatore and Azriel feature open-source Pixhawk flight controller, offering endless possibilities to customize your drone for your specific operation.
                            The standard configuration is set up with ArduPilot software, however, upon request, we can install PX4 instead. <br />
                            We offer both the Cube Orange and Cube Blue flight controllers. You can learn more information about both options further down the page.
                        </div>
                    </div>
                </animated.div>
            </animated.div>
            <animated.div className={styles.pixInner1} ref={ref2} style={props2}>
                <animated.div style={child3Props}>
                    <div
                        className={styles.textArea}
                    >
                        <div className={styles.pixtext}>Herelink ground station</div>
                        <div className={styles.cusText}>
                            This transmitter allows you to manually fly your drone, view a live video feed from the aircraft at all times, and program automated missions on a Google Maps overlay.
                        </div>
                        <div className={styles.featureArea}>
                            <div className={styles.cusText} style={{'marginBottom': '20px'}}>
                                The HereLink Black has the following features:
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot_fail}></div>
                                <div className={styles.cusText}>
                                    3 Functions in 1 unit – view live HD video feed at all times, manually fly the aircraft, and program auto missions using a google Maps overlay
                                </div>
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot}></div>
                                <div className={styles.cusText}>
                                    Touchscreen for ease of use
                                </div>
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot}></div>
                                <div className={styles.cusText}>
                                    QGround control & Missions Planner installed
                                </div>
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot}></div>
                                <div className={styles.cusText}>
                                    See the live aircraft location on a Google Maps interface
                                </div>
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot_fail2}></div>
                                <div className={styles.cusText}>
                                    2 mini HDMI video ports allow you to have two cameras connected and switch between the vedio feeds
                                </div>
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot}></div>
                                <div className={styles.cusText}>
                                    Flight range up to 20km
                                </div>
                            </div>
                        </div>
                    </div>
                </animated.div>
                <animated.div style={child4Props}>
                    <img src={drone2} className={styles.drone22} alt="" />

                </animated.div>
            </animated.div>

            <animated.div className={styles.pixInner} ref={ref3} style={props3}>
                <animated.div style={child5Props}>
                    <img src={drone3} className={styles.drone2} alt="" />

                </animated.div>
                <animated.div style={child6Props}>
                    <div className={styles.textArea}>
                        <div className={styles.pixtext}>Specialized GCS</div>
                        <div className={styles.cusText} style={{'marginBottom': '20px'}}>
                        Robust ground control station tailored for professionals who require advanced functionality and reliability. It offers seamless manual drone control, real-time HD video streaming, and precise mission planning. 
                        Key features include:                        </div>
                        <div className={styles.featureArea}>
                            <div className={styles.featuremian}>
                                <div className={styles.dot_fail3}></div>
                                <div className={styles.cusText}>
                                Gimbal camera control for smooth and precise adjustments during flight      
                                </div>
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot_fail3}></div>
                                <div className={styles.cusText}>
                                Extensive channel customization options for versatile control configurations
                                </div>
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot_fail2}></div>
                                <div className={styles.cusText}>
                                Large, ultra-bright touchscreen for improved visibility and ease of use in all lighting conditions                                </div>
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot_fail2}></div>
                                <div className={styles.cusText}>
                                Pre-installed Drone Operational Software and Mission Planner for sophisticated mission management                                </div>
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot}></div>
                                <div className={styles.cusText}>
                                Real-time aircraft tracking on a detailed Google Maps interface                                </div>
                            </div>
                            <div className={styles.featuremian}>
                                <div className={styles.dot}></div>
                                <div className={styles.cusText}>
                                10-30 km flight range for extended and reliable operations                                </div>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </animated.div>
        </div>
    );
}

export default PixSection;
