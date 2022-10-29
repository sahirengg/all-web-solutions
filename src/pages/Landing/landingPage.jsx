import React , {useEffect} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import clip from '../../common-components/Assets/backgroundvideo.mp4'
import CardMedia from '@mui/material/CardMedia';
import {changeUSerData} from '../../Redux/Actions/userActions'
const LandingPage = () => {
const dispatch = useDispatch();
 const user = useSelector(state=>state)


 console.log(user)
useEffect(()=>{
    
     dispatch(changeUSerData("arish"))
},[])

    return (
        <Container>
            
            <video style={{width:'100%'}}    autoPlay loop muted >
            <source src={clip} type='video/mp4' />
            {/* <source src={clip} type="video/ogg" />  */}
    </video>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    )
}



export default LandingPage;