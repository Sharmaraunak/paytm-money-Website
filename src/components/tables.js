import React from 'react'
import '../tables.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Options from './options'
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SimpleTable from './box'


const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
      width: 'auto',
      height: '5rem',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      '& svg': {
        margin: theme.spacing(1.5),
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },
    
    },
  }));



const AirbnbSlider = withStyles({
    root: {
      color: '#3a8589',
      height: 3,
      padding: '13px 0',
    },
    thumb: {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      marginTop: -12,
      marginLeft: -13,
      boxShadow: '#ebebeb 0 2px 2px',
      '&:focus, &:hover, &$active': {
        boxShadow: '#ccc 0 2px 3px 1px',
      },
      '& .bar': {
        // display: inline-block !important;
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: 3,
    },
    rail: {
      color: '#d8d8d8',
      opacity: 1,
      height: 3,
    },
  })(Slider);
  
  function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </span>
    );
  }



export const Tables = () => {

    const classes = useStyles();

    return(
        <div className="pageContent">
            <div className="content">
                <div className="left">
                    <div className="left__header">
                        <div className="left__header__text1">FILTERS</div>
                        <div className="left__header__text2">CLEAR ALL</div>
                    </div>
                    <div className="left__sector">
                        <div className="head">
                        <div className="head_left">Sector</div>
                        <ExpandMoreIcon fontSize="large"/>
                        </div>
                        <div className="search">
                       
                            <OutlinedInput
                            id="outlined-adornment-weight"
                            className="Outinput"
                            placeholder="Search for Sectors,sub-sectors"
                            startAdornment={
                                <InputAdornment position="start">
                                <IconButton
                                   edge="start"                          
                                >
                                 <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                            }>
                           
                            </OutlinedInput>
                        </div>

                        <div className="options">
                            <Options name="Agricultural Products" size="5" addIcon="true"/>
                            <Options name="Apparel and Accessories" size="3"  addIcon="true"/>
                            <Options name="Automobile and Anicillaries" size="9"  addIcon="true"/>
                            <Options name="Banking" size="3"  addIcon="true"/>
                            <Options name="Consumer Durables" size="6"  addIcon="true"/>
                            <Options name="Derived Materials" size="16"  addIcon="true"/>
                            <Options name="Energy" size="7"  addIcon="true"/>
                            <Options name="Financial" size="13"  addIcon="true"/>

                        </div>

                        
                    </div>
                    <div className="left__Index">
                        <div className="head">
                            <div className="head_left">Index</div>
                            <ExpandMoreIcon fontSize="large"/>
                        </div>
                        <div className="options">
                            <Options name="Nifty"  addIcon="false"/>
                            <Options name="Nifty 50" addIcon="false"/>
                            <Options name="Nifty midcap" addIcon="false"/>
                        </div>
                    </div>
                    <div className="left__MarketCap">
                        <div className="head">
                            <div className="head_left">Market Cap</div>
                            <ExpandMoreIcon fontSize="large"/>
                        </div>
                        <AirbnbSlider
                            ThumbComponent={AirbnbThumbComponent}
                            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                            defaultValue={[20, 40]}
                        />

                        <div className="middle">
                            <input type="number" placeholder="10" id="1"/>
                            <span>to</span>
                            <input type="number" placeholder="100000"/>
                        </div>
                        <div  className="end">
                        <Grid container
                         alignItems="center"
                         variant="fullWidth"
                          className={classes.root}>
                            <span>Small</span>
                            <Divider orientation="vertical" flexItem />
                            <span>Mid</span>
                            <Divider orientation="vertical" flexItem />
                            <span>Large</span>
                        </Grid>
                        </div>


                    </div>
                    <div className="left__Closing">
                        <div className="head">
                            <div className="head_left">Closing Price</div>
                            <ExpandMoreIcon fontSize="large"/>
                        </div>
                        <AirbnbSlider
                            ThumbComponent={AirbnbThumbComponent}
                            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                            defaultValue={[20, 40]}
                        />
                        <div className="middle">
                            <input type="number" placeholder="10"/>
                            <span>to</span>
                            <input type="number" placeholder="100000"/>
                        </div>

                    </div>
                </div>

                <div className="table">
                  <span>
                    Search results
                    <span id="inside">
                        3318 Stocks
                    </span>
                  </span>

                  <div className="box">
                    <SimpleTable/>
                  </div>

                </div>         

                
            </div>
        </div>
    )
  
}
