import React from 'react'
import style from '../styles/slider.module.css'

const Slides = ({name,subname,image,social,text,date,star}) => {

    return (
        <a href="#">
            <div className={style.card}>
                <div className={style.upperText}>
                    <div className={style.leftPart}>
                        <div className={style.imagePart}>
                            <img src={require(`../static/images/${image}`)} alt="image" className={style.userImage}/>
                        </div>
                        <div className={style.textPart}>
                            <div className={style.upper}>
                                {name}
                            </div>
                            <div className={style.lower}>
                                {subname}
                            </div>
                        </div>
                    </div>
                    <img src={require(`../static/images/${social}`)} alt="image" className={style.socialImage}/>
                </div>
                <div className={style.lowerText}>
                    {text}
                </div>
                <div className={style.date}>
                    {date}
                </div>
            </div>
        </a>
    )
}

export default Slides;
