import React,{Suspense,lazy} from "react"
import './video.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@mui/styles';
import { styled } from '@mui/material/styles';

const VideoComp =  lazy(()=>import("./videoComp"));

const useStyles = makeStyles(theme=>({
  btn :{
    backgroundColor:'#00bcd4',
  "&:focus": {
    backgroundColor:'red'
  }
  }
}))

const DiscoverBtn = styled(Button)(({theme})=>({
  backgroundColor: '#00bcd4',
  "&:focus , &:hover": {
    backgroundColor:'#07B14D'
  }
}))

 const BgVideo = () =>{
  const navigate = useNavigate();
   const classes = useStyles();
    return ( 
    <Suspense fallback={ <Skeleton variant="rectangular" width={210} height={608} />}>
    <VideoComp />
      <div className="content">
      <Typography paragraph={true} variant="h4">The promise of delivering Software Engineering, <br />Strategy, Consulting and Digital Services<br /> development, and training .</Typography>
      <DiscoverBtn onClick={()=>navigate('/about')} variant='contained'className={classes.btn} size='large'>Discover</DiscoverBtn>
      </div> 
  
      </Suspense>)
  };


  export default BgVideo


