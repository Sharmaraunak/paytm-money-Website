import React from 'react'
import style from '../styles/section5.module.css'
import Link from '../components/links'


const Section5 = () =>{

    return (
        <div className={style.section5}>
            <div className={style.border}></div>
            <div className={style.content}>
                <div className={style.top}>
                    <div>
                        <div className={style.logo1}>
                            <img src={require(`../static/images/money-logo.svg`)} alt="image"></img>
                        </div>
                        <div className={style.logo2}>
                            <a href="#" className={style.smallLogo}>
                                <img  width="30" margin="1" src={require(`../static/images/fb.svg`)} alt="image"/>
                            </a>
                            <a href="#" className={style.smallLogo}>
                                <img  width="30" margin="1" src={require(`../static/images/li.svg`)} alt="image"/>
                            </a>
                            <a href="#" className={style.smallLogo}>
                                <img  width="30" margin="1" src={require(`../static/images/medium.svg`)} alt="image"/>
                            </a>
                            <a href="#" className={style.smallLogo}>
                                <img  width="30" margin="1" src={require(`../static/images/tw.svg`)} alt="image"/>
                            </a>
                        </div>                      
                        <div className={style.logo3}>
                            <a href="#" className={style.smallLogo1}>
                                <img  width="auto" height="100%" src={require(`../static/images/google-play-icon.svg`)} alt="image"/>
                            </a>
                            <a href="#" className={style.smallLogo1}>
                                <img  width="auto" height="100%" margin="1" src={require(`../static/images/apple-logo-icon.svg`)} alt="image"/>
                            </a>
                           
                        </div>
                    </div>
                    <div className={style.links}>
                       <Link header="Products"
                            link1="Mutual Funds"
                            link2="Stock Market"
                            link3="NPS Retirement Funds"/>
                        <Link header="Company"
                            link1="About Us"
                            link2="Blog"
                            link3="Contact Us"/>
                        <Link header="Support"
                            link1="Customer Support"
                            link2="Grievance Redressal"
                            link3="Safety & Security"/>
                        <Link header=" More"
                            link1="Terms & Conditions"
                            link2="Privacy Policy"
                            link3="Disclaimers"/>
                    </div>
                </div>
                <div className={style.contentBottom}>
                <div className={style.leftPart}>
                    <div>
                    © Paytm Money Limited. CIN - U72900DL2017PLC323936. All Rights Reserved
                    </div>
                    <div>
                    Registered with the Securities and Exchange Board of
                     India (SEBI) as an Investment Advisor (INA100009859) 
                    and with Pension Fund <br></br>Regulatory and Development Authority (PFRDA)
                     as NPS ePOP (269042019).
                    </div>
                    <div>
                    SEBI Reg No. Broking - INZ000240532; Depository Participant 
                    - IN - DP - 416 - 2019 , <br></br>
                     Depository Participant Number: CDSL - 12088800, <br></br>
                      Trading and clearing member of NSE (90165,M52073) and BSE(6707).
                    </div>
                    <div>
                    Registered Office: 136, 1st Floor, Devika Tower, Nehru Place, Delhi - 110019.
                    </div>
                    <div>
                    Investments in securities markets are subject to market risks, <br></br>
                     read all the related documents carefully before investing.
                    </div>
                </div>
                <div className={style.rightPart}>
                    <span className={style.text}>Subscribe Paytm Money Family</span>
                    <p>Get our monthly newsletter from Advisory Desk</p>
                    <div>
                        <div className={style.contact}>
                            <input type="email" placeholder="YourEmail@example.com" className={style.email}/>
                            <button className={style.submit}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            </div>
           
        </div>
    )
}

export default Section5;