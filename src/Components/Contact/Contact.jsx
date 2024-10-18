import React from 'react'
import styles from './Contact.module.css'



const Contact = () => {
    return (
        <>
            <div className={styles.mainOuter}>
                <div className={styles.contactInner}>
                    <div className={styles.contactInner}>Contact Us</div>
                    <div className={styles.loremText}>
                    <p className={styles.talk}>Let's talk! </p>
                   <p>You can drop in your details to connect & request a demo </p> 
                   </div>
                    <div className={styles.fieldsArea}>
                        <div className={styles.nameArea}>
                            <input type="text" className={styles.nameInput} placeholder='Name' />
                            <input type="text" className={styles.nameInput} placeholder='Phone Number' />
                        </div>
                        <div className={styles.nameArea}>
                            <input type="email" className={styles.nameInput} placeholder='Email' />
                            <input type="text" className={styles.nameInput} placeholder='Country' />
                        </div>
                        <textarea placeholder='Message' className={styles.messageArea}></textarea>
                        <button className={styles.contactBtn}>Join the party 🎉 </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
