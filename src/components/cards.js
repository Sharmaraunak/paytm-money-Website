import React from 'react'
import style from '../styles/cards.module.css'


const Cards  = ({image,text,subtext}) => {

    

    return(
        <div className={style.cards}>
            <img src={require(`../static/images/${image}`)} alt="images"/>
            <div className={style.text}>
                    {text}
                    
            </div>
            <div className={style.subText}>
                    {subtext}
            </div>
            <a href="#">
                <div className={style.button}>
                    View Details
                    <span className={style.after}></span>
                </div>
            </a>
        </div>

    )

}

export default Cards;