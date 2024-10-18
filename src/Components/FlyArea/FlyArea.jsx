import React from 'react'
import styles from './FlyArea.module.css'

const FlyArea = () => {
    return (
        <>
            <div className={styles.mainOuter}>
                <div className={styles.giveArea}>
                    <div className={styles.givetext}>
                    Giving you freedom to fly higher!
                    </div>
                    <div className={styles.salvatext}>
                    
                    Salvatore and Azriel are designed for hobby and professional use featuring a flight time from 40 to 60 minutes and unbeatable versatility with a large payload bay for payloads up to 10 to 15 kg                 </div>
                    <button className={styles.viewbutton}>View products</button>
                </div>
            </div>
        </>
    )
}

export default FlyArea
