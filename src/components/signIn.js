import React from "react";
import { useHistory } from 'react-router-dom'
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
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import  Visibility  from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { render } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));
    

const SignIn = () => {

    const classes = makeStyles();
    const [values, setValues] = React.useState({
        tel: '',
        password: '',
        showPassword: false,
        loggedIn: false,
        });
    
    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
        
    };

    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const history = useHistory();

    const submitForm = (event) => {
        event.preventDefault();
        const email = values.tel;
        const password = values.password;
        //login logic

        if( email === "9629906806" && password == "123"){
              values.loggedIn = true ;  
              history.push("/tables")     
        }        
        else{
            alert("Either email or Password is incorrect");
        }

    }
    

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
                               <form 
                               className={classes.root} 
                               validate  
                                onSubmit={submitForm}
                              >
                               <FormControl 
                                       className={clsx(classes.margin, classes.textField)} 
                                       variant="outlined"
                                       fullWidth="true">
                                            <InputLabel htmlFor="custom-css-standard-input">Registered mobile number</InputLabel>
                                            <OutlinedInput
                                               
                                                id="custom-css-standard-input"
                                                type="tel"
                                                value={values.tel}
                                                onChange={handleChange('tel')}
                                                labelWidth={70}
                                                required="true"
                                            />
                                        </FormControl>
                                <div className={style.passwordField}>
                                    
                                       <FormControl 
                                       className={clsx(classes.margin, classes.textField)} 
                                       variant="outlined"
                                       fullWidth="true">
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                required="true"
                                                onChange={handleChange('password')}
                                                endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    
                                                    >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                                }
                                                labelWidth={70}
                                            />
                                        </FormControl>

                                </div>
                                <div className={style.text}>
                                    <span>Forgot Password?</span>
                                </div>
                                <span>
                                    <button type="submit"
                                        className={style.Button}
                                        > SIGN IN</button>      
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
              <div className={style.bannerText}>
                    <div className={style.topText}>
                        Hello India
                    </div>
                    <div className={style.bottomText}>
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
