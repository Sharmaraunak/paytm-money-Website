
import React from 'react';
import styles from '../styles/section.module.css'




function Section(){
    return(
        <section className={styles.section}>
           <div className={styles.textPart}>
                <span className={styles.textPartChild}>Hello India!</span>
                <span className={styles.text}>Investing is Simple,</span>
                <span className={styles.text}>Transparent  &  for  everyone.</span>
                <div className={styles.btnPart}>Start Investing</div>
           </div>
            <div className={styles.image}></div>
        </section>
       
    );
}

export default Section;