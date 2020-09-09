import React from "react";
import style from "../styles/signIn.module.css";
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
    
  } from '@material-ui/core/styles';
  import Button from '@material-ui/core/Button'
  import InputBase from '@material-ui/core/InputBase';
  import InputLabel from '@material-ui/core/InputLabel';
  import TextField from '@material-ui/core/TextField';
  import FormControl from '@material-ui/core/FormControl';
  import { grey } from '@material-ui/core/colors';

  const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
        color: '#616161',
        },
        
        '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#616161',
        },
        
        '&.Mui-focused fieldset': {
            borderColor: '#e1f5fe',
        },
        
        },
    },
    })(TextField);

    const theme = createMuiTheme({
        palette: {
          primary: grey,
        },
      })

const SignIn = () => {

    const classes = makeStyles();

  return (
    <div className={style.block}>
      <div className={style.insideBlock}>
        <div>
          <div className={style.outerCard}>
              <div className={style.signInside}>
                    <img src={require(`../static/images/money-logo.svg`)} alt="money-logo" className={style.logo}/>
                    <div className={style.form}>
                        <div className={style.signIn}>
                            <div className={style.signInInside}>
                                Sign In
                            </div>
                            <div>
                               <form className={classes.root} Validate>
                               <CssTextField
                                    className={classes.margin}
                                    label="Registered Mobile or Email on Paytm"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    fullWidth="true"
                                />
                                <div className={style.passwordField}>
                                    <CssTextField
                                        className={classes.margin}
                                        label="Password"
                                        variant="outlined"
                                        id="custom-css-outlined-input"
                                        fullWidth="true"/>
                                        <i className={style.eye}></i>

                                </div>
                                <div className={style.text}>
                                    <span>Forgot Password?</span>
                                </div>
                                <span>
                                        <button className={style.Button}>SIGN IN</button>
                                </span>
                                <div className={style.newText}>
                                    Don't have an account?
                                    <span>Sign Up</span>
                                </div>
                                <div className={style.images}>
                                    <img src={require(`../static/images/playstore.svg`)} alt="play"/>
                                    <img src={require(`../static/images/apple-logo.svg`)} alt="play"/>
                                </div>
                               </form>
                            </div>
                        </div>
                    </div>
              </div>
              <div className={style.banner}>
              <div class={style.bannerText}>
                    <div class={style.topText}>
                        Hello India
                    </div>
                    <div class={style.bottomText}>
                        Investing is simple
                    <br/>
                    Transparent & for Everyone.
                    </div>
                    
                </div>
                <img src={require(`../static/images/global-banner-illustration.svg`)} alt="gbi"/>
              </div>
          </div>
          <div className={style.outText}>
                 By proceeding, you agree to the
                 <span>
                     <a href="#">Terms & Conditions </a>
                 </span>
                 and
                <span>
                <a href="#">Privacy Policy</a>
                </span>
                of Paytm Money.
            </div>
          </div>                
        </div> 
      </div>
    
  );
};
export default SignIn;
