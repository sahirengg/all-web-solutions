import React,{useState,useEffect} from "react";
import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import { __tablet } from "../../common-components/matches";
import { styled,useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import {useNavigate,useLocation} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';

const useStyles = makeStyles(theme=>({
    footer: {
       backgroundColor: theme.palette.primary.main,
       width:'100%',
       height: '400px',
    //    paddingTop:'10px'
    position: 'relative',
    left: 0,
    bottom: 0,
    width: '100%'
    }
}))

const ConnectWithMeBtn = styled(Button)(({theme})=>({
    backgroundColor: '#00bcd4',
    height:'100%'
}))



const Footer = () => {  
const classes = useStyles()
const navigate = useNavigate();
const location = useLocation()
const theme = useTheme()

    return (
        <footer className={classes.footer} >
          {location.pathname !== "/contact-us" ?   <Box sx={{flexGrow:1,width:'80%',backgroundColor:'#141c3a', height:'150px', margin : 'auto', position:'relative',top:'60px'}}>
         <Grid  container
           spacing={2}
           sx={{position:'relative', top:'30px',left:'40px'}}
         justifyContent="center"
           alignItems="">
              <Grid item sm={4} xs={4}>
                <Typography sx={{color:'white'}} variant='h4'>Start a project</Typography>
              </Grid>
              <Grid item sm={4} xs={4}>
               <Typography sx={{color:'white',margin: '0 10px 0 0'}} variant='body4'>Interested in working together ? We should queue up a time to chat. We’ll buy the coffee.</Typography>
              </Grid>
              <Grid item sm={4} xs={4}>
              <ConnectWithMeBtn onClick={()=>navigate('/contact-us')} variant="contained">
                  Connect with Us
              </ConnectWithMeBtn>

              </Grid>
           </Grid>
           </Box> : <span></span>}
           <Box sx={{paddingTop:'80px', margin:'auto 0', textAlign:'center',color:'#FFFFFF'}}>
           <Typography sx={{fontWeight: 'bold'}} variant='h4'>All Web Solutions</Typography>
           <Typography variant='body4'>Your Partner For Innovations</Typography>

           </Box>
           <FacebookIcon sx={{ color: theme.palette.primary.main }} />

        </footer>
    )
}


export default Footer;