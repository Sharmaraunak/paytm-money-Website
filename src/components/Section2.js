import React from 'react'

import styles from '../styles/section2.module.css'

import Cards from './cards'

function Section2(){

    return (
        <div className={styles.section2}>
            <div className={styles.inside}>
                <div className={styles.text}>
                60,00,000+ users trust us for their Investments.
                </div>
                <div className={styles.subText}>
                Leader &amp; pioneer in low-cost &amp; commission-free investing, we provide access to investing for Indians and help them achieve their financial goals.
                </div>
                <div className={styles.cardSection}>
                    <Cards 
                        image="mutual-fund-icon.svg"
                        text="Mutual Funds"
                        subtext="Grow wealth & invest for your future with direct plans"/>
                    <Cards 
                        image="equity-icon.svg"
                        text="Stock Market"
                        subtext="Directly invest in companies you love & follow."/>
                    <Cards 
                        image="nps-icon.svg"
                        text="NPS Retirement Funds"
                        subtext="Build a corpus & pension for your retirement."/>
                </div>
                <div className={styles.backCover}> </div>

            </div>
        </div>

    )
}

export default Section2;