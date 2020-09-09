import React from 'react'
import style from '../styles/section4.module.css'

const Section4 = () =>{

    return(
        <div className={style.section4}>
            <span className={style.text}>Simple. Transparent. Accessible.</span>
            <span className={style.subText}>
            Our investment offerings give you a wide access to products and services to invest, manage money and achieve your financial goals.
            </span>
            <div className={style.button}>Start Investing</div>
            <div className={style.circle}></div>
            <div className={style.blue}></div>
            <div className={style.image}></div>
        </div>
    )
}

export default Section4;