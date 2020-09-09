import React from 'react'
import style from '../styles/link.module.css'

const Link = ({header,link1,link2,link3}) =>{

    return (
        <div className={style.link}>
            <div>
                <span className={style.text}>{header}</span>
            </div>
            <ul className={style.itemList}>
                <li>
                    <span className={style.subText}>
                        {link1}
                    </span>
                </li>
                <li>
                    <span className={style.subText}>
                        {link2}
                    </span>
                </li>
                <li>
                    <span className={style.subText}>
                        {link3}
                    </span>
                </li>
            </ul>
        </div>
    )

}

export default Link;