import React from 'react'
import styles from './Footer.module.css'
import Icon from '../../Assets/footerIcon.png'
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TbPhoneFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className={styles.mainOuter}>
                <div className={styles.footInner}>
                    <div className={styles.iconArea}>
                        <img src={Icon} alt="" className={styles.Icon} />
                        <div className={styles.innerIcons}>
                            <BiLogoFacebook className={styles.logiIcon} />
                            <AiOutlineTwitter className={styles.logiIcon} />
                            <BiLogoLinkedin className={styles.logiIcon} />
                            <AiOutlineInstagram className={styles.logiIcon} />
                        </div>
                    </div>
                    <div className={styles.linksArea}>
                        <div className={styles.linksOuter}>
                            <div className={styles.linksInner}>
                                <div className={styles.pageText}>Pages</div>
                                <div className={styles.blogText}>Home</div>
                                <div className={styles.blogText}>Pricing</div>
                                <div className={styles.blogText}>Blog</div>
                                <div className={styles.blogText}>Demo</div>
                            </div>
                            <div className={styles.linksInner}>
                                <div className={styles.pageText}>Products</div>
                                <div className={styles.blogText}>Salvador</div>
                                <div className={styles.blogText}>Azrial</div>
                            </div>
                            <div className={styles.linksInner1}>
                                <div className={styles.pageText}>Contact</div>
                                <div className={styles.phoneArea}>
                                    <TbPhoneFilled className={styles.phoneIcon} />
                                    <div className={styles.blogText}>+359882373878</div>
                                </div>
                                <div className={styles.phoneArea}>
                                    <MdEmail className={styles.phoneIcon} />
                                    <div className={styles.blogText}>d-aerospace@gmail.com</div>
                                </div>
                                <div className={styles.phoneArea1}>
                                    <FaLocationDot className={styles.phoneIcon} />
                                    <div className={styles.blogText1}>Ring Mall, Sofia, 1000 </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.linksOuter}>
                            <div className={styles.linksInner}>
                                <div className={styles.pageText}>General</div>
                                <div className={styles.blogText}>GET STARTED</div>
                                <div className={styles.blogText}>ABOUT US</div>
                                <div className={styles.blogText}>CONTACT US</div>
                                <div className={styles.blogText}>COMPONENTS </div>
                                <div className={styles.blogText}>AUTHORIZED</div>
                                <div className={styles.blogText}>DEALERS</div>
                            </div>
                            <div className={styles.linksInner}>
                                <div className={styles.pageText}>General</div>
                                <div className={styles.blogText}>GET STARTED</div>
                                <div className={styles.blogText}>ABOUT US</div>
                                <div className={styles.blogText}>CONTACT US</div>
                                <div className={styles.blogText}>COMPONENTS </div>
                                <div className={styles.blogText}>AUTHORIZED</div>
                                <div className={styles.blogText}>DEALERS</div>
                            </div>
                            <div className={styles.linksInner}>
                                <div className={styles.pageText}>General</div>
                                <div className={styles.blogText}>GET STARTED</div>
                                <div className={styles.blogText}>ABOUT US</div>
                                <div className={styles.blogText}>CONTACT US</div>
                                <div className={styles.blogText}>COMPONENTS </div>
                                <div className={styles.blogText}>AUTHORIZED</div>
                                <div className={styles.blogText}>DEALERS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
