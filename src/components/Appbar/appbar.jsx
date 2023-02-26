
import React  from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import  CardMedia from '@mui/material/CardMedia';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import {makeStyles} from '@mui/styles';
import video from '../../common-components/Assets/backgroundvideo.mp4'
import logo from '../../common-components/Assets/logo.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import {__tablet} from '../../common-components/matches'
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles(_theme=>(
    
    {
    
    logo:{
      cursor: 'pointer',
      width: '89px',
      background: 'navajowhite',
      borderRadius: '61px',
      radius: '9px',
      height: '89px',
    },
    appBar: {
      background: 'red'
    }
}))




const AppBarHeader = (props:any) => {
  const tabletS = __tablet();
  const navigate = useNavigate();

  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('sm'))
 const classes = useStyles();
 const [value, setValue] = React.useState(0);

    console.log(classes)

    const HideOnScroll = (props:any) => {
        const { children, window } = props;

 

        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe. 
        const trigger = useScrollTrigger({
          target: window ? window() : undefined,
        });

        
      
        return (
          <Slide appear={false} direction="down" in={!trigger}>
            {children}
          </Slide>
        );
      }
  
      const handleChange = (_event:any, newValue:any) => {
        setValue(newValue);
      };
    
    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        /**
         * Injected by the documentation to work in an iframe.
         * You won't need it on your project.
         */
        window: PropTypes.func,
      };
    return (
<React.Fragment>
<CssBaseline />
<HideOnScroll {...props}>  
  <AppBar sx={{background: '#00bcd4'}}>
    <Toolbar>
   {/* {tabletS ? <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton> : null} */}
   
      {!tabletS ? <><img onClick={()=>navigate('/')} className={classes.logo} src={logo} /></> : <></>}
      <Tabs 
      textColor='white'
      indicatorColor='red'
      sx={{ width: '40%', bgcolor: 'none',margin: "0 0 0 46%" }}
      value={value} onChange={handleChange} 
      centered>
         <Tab onClick={()=>navigate('/')} label="Home " />
        <Tab onClick={()=>navigate('/about')} label="About " />
        <Tab label="Services" />
        <Tab label="Projects" />
        <Tab label="Blog" />
        <Tab label="Contact" />
      </Tabs>
    </Toolbar>
  </AppBar>
</HideOnScroll>
<Toolbar />
<CardMedia src={video} />
        </React.Fragment>
    )
}

export default AppBarHeader;