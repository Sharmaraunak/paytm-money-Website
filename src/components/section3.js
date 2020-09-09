import React from 'react'
import style from '../styles/section3.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Slides from './slider';


function Arrow(props) {
    let className = props.type === "next" ? "prevArrow":"nextArrow";
    
    if(className === "nextArrow")
    {
        return (
            <div className={style.arrowNext} onClick={props.onClick}>
                <div className={style.InsidenextArrow}>
                </div>
            </div>
          );
    }
    else{
        return (
            <div className={style.arrowPrev} onClick={props.onClick}>
                <div className={style.InsideprevArrow}>
                </div>
            </div>
          );
    }
    
  }




function Section3(){

    

    return (
        <div className={style.section3}>
            <div className={style.textPart}>
                <div className={style.text}>
                Our users love investing via Paytm Money. Every single day.
                </div>
                <div className={style.subText}>
                We bring simplicity and ease to investing, along with exceptional customer experience that our users admire.
                </div>
            </div>
            <img src={require("../static/images/combined-shape.svg")} alt="image"
                    className={style.image1}/>
            <img src={require(`../static/images/combined-shape-copy.svg`)} alt="image"
                        className={style.image2}/>
            <div className={style.slider}>
                    <Slider
                    nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                    slidesToShow={3}
                    slidesToScroll={1}
                    infinite= {false}
                    
                    >
                        <Slides 
                                name="Udit N. Singh"
                                subname="@theuditnsingh"
                                image="udit.jpg"
                                social="twitterIcon.svg"
                                text="Hey @PaytmMoneyTeam, Great job. Tried the app recently for #MutualFund investment &amp; absolutely loved it. So easier to understand &amp; follow through. Really gives the confidence to customer by removing that mystery factor away. More power to you.. Kudos..!@Paytm@vijayshekhar"
                                date="17 July, 2020"
                        />
                         <Slides 
                                name="Rahul Mathur"
                                subname="@Rahul-J-Mathur"
                                image="rahul.jpg"
                                social="twitterIcon.svg"
                                text="Excited to see this from @PaytmMoney
                                 Paytm is positioning itself as your finance hub<br>
                                - Lending/credit via Paytm First card (membership)<br>
                                - Insurance via brokerage and now Raheja QBE acquisition<br>
                                - Wealth mgt via Paytm Money"
                                date="7 July, 2020"
                        />
                        <Slides 
                                name="Navin064"
                                subname="@navin064"
                                image="navin.jpg"
                                social="twitterIcon.svg"
                                text="Excited to see this from @PaytmMoney
                                Paytm is positioning itself as your finance hub<br>
                               - Lending/credit via Paytm First card (membership)<br>
                               - Insurance via brokerage and now Raheja QBE acquisition<br>
                               - Wealth mgt via Paytm Money"
                                date="7 July, 2020"
                        />
                        <Slides 
                                name="Navin064"
                                subname="@navin064"
                                image="navin.jpg"
                                social="twitterIcon.svg"
                                text="Excited to see this from @PaytmMoney
                                Paytm is positioning itself as your finance hub<br>
                               - Lending/credit via Paytm First card (membership)<br>
                               - Insurance via brokerage and now Raheja QBE acquisition<br>
                               - Wealth mgt via Paytm Money"
                                date="7 July, 2020"
                        />
                         <Slides 
                                name="Navin064"
                                subname="@navin064"
                                image="navin.jpg"
                                social="twitterIcon.svg"
                                text="Excited to see this from @PaytmMoney
                                Paytm is positioning itself as your finance hub<br>
                               - Lending/credit via Paytm First card (membership)<br>
                               - Insurance via brokerage and now Raheja QBE acquisition<br>
                               - Wealth mgt via Paytm Money"
                                date="7 July, 2020"
                        />
                    
                    </Slider>
                    
            </div>
            
        </div>

    )

}

export default Section3;