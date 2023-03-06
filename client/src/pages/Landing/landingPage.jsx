import React , {useEffect} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import MiniDrawer from "../../components/Mobile-components/Drawer/drawer";
import Typography from '@mui/material/Typography';
import { __tablet } from "../../common-components/matches";
import {changeUSerData} from '../../Redux/Actions/userActions'
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import Paper from '@mui/material/Paper';
import DiamondIcon from '@mui/icons-material/Diamond';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BgVideo =  React.lazy(()=>import('./video'));

const useStyles = makeStyles(theme=>({
 descBox: {
  top: '-7px',
  position: 'relative',
  marginBottom:'30px',
  width: '100%',
  height: 400,
  backgroundColor: theme.palette.primary.main,
 
 },
 parentBox:{
 position: 'relative'
 },
 desDevMen: {
  position:'relative',
  bottom:'150px',
  left:'150px',
  width:'80%',
  height:'610px',
  backgroundColor:'white',
  borderRadius: '40px',
  // boxShadow: '10px 10px 10px 10px'
 },
 gridItem: {
  borderRight: '1px solid black',
  borderLeft:'1px solid black'
 },
 diaIcon:{
  color: theme.palette.primary.main,
  fontSize: '5em'
 },
 headThree: {
  color: theme.palette.primary.main,
  paddingTop:'40px'
 }
}))

const CustomCol = styled(Box)(({theme})=>({
  alignItems:'center',
  textAlign: 'center',
  borderRight:'1 px solid red',
  borderLeft:'1 px solid red'

}));

const Body2 = styled(Typography)(({theme})=>({
  color:theme.palette.text.secondary,
  textAlign: 'center',
  padding: '10px 0 0 10px'
}))

const LandingPage = () => {
 const classes = useStyles();
 const dispatch = useDispatch();
 const user = useSelector(state=>state)


 console.log(user)
useEffect(()=>{
    
     dispatch(changeUSerData("arish"))
},[])

const pageContent = () => {
  return (
    <React.Fragment>
    <BgVideo />
    <Box className={classes.parentBox}>
    <Box className={classes.descBox}>
       <Typography sx={{color:'white', padding:'80px 10px 10px 10px', textAlign:'center', margin : 'auto 0',}} paragraph={true} variant='h4' gutterBottom >
       From strategy to execution, your path to Software Engineering and Digital Transformation starts here.<br />
       </Typography>
     <Typography sx={{color:'white', padding:'0 10px 10px 10px', textAlign:'center', margin : 'auto 0',}}>
      All Web Solutions is a pioneering Software Engineering and IT consultancy company, transforming and executing at the intersection of Domain and Technology to create digital leaders for our people, clients, partners, and communities.
       </Typography>
    </Box>
    <Paper elevation={3} className={classes.desDevMen}>
    <Box 
    sx={{display: 'flex'}}
    >
      <CustomCol>
        <br />
        <DiamondIcon fontSize="1em" className={classes.diaIcon} />
        <Typography variant='h4'>
          Design
        </Typography>
      <Body2 variant='body2'>
      Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth
        </Body2>
        <Typography className={classes.headThree} variant='h6'>
        Things we enjoy designing:
        </Typography>
        <Body2 variant='body2'>
        UX, UI, Web, Apps, Logos
        </Body2>
        <Typography className={classes.headThree} variant='h6'>
        Design Tools:
        </Typography>
        <Body2 variant='body2'>
        Adobe XD
        </Body2>
        <Body2 variant='body2'>
        Webflow
        </Body2>
        <Body2 variant='body2'>
        Figma
        </Body2>
      </CustomCol>
      <CustomCol>
      <br />
        <DeveloperModeIcon fontSize="1em" className={classes.diaIcon} />
        <Typography  variant='h4'>
          Development
        </Typography>
      <Body2 variant='body2'>
      We can code our own designs or even use the customer's design as base. Our focus is to generate clean code that's well structured for reliability
        </Body2>
        <Typography className={classes.headThree} variant='h6'>
        Languages We speak:
        </Typography>
        <Body2 variant='body2'>
        English, Urdu, Hindi
        </Body2>
        <Typography className={classes.headThree} variant='h6'>
        Dev Tools:
        </Typography>
        <Body2 variant='body2'>
        React JS
        </Body2>
        <Body2 variant='body2'>
        Next JS
        </Body2>
        <Body2 variant='body2'>
        Gatsby JS
        </Body2>
        <Body2 variant='body2'>
        Node JS
        </Body2>
        <Body2 variant='body2'>
        React Native
        </Body2>
        <Body2 variant='body2'>
        WordPress
        </Body2>
        <Body2 variant='body2'>
        AWS, S3, EC2
        </Body2>
      </CustomCol>
      <CustomCol>
      <br />
        <AssignmentIcon fontSize="1em" className={classes.diaIcon} />
        <Typography variant='h4'>
          Mentorship
        </Typography>
      <Body2 variant='body2'>
      We genuinely care about people, and love helping fellow developers work on their projects and new ideas.</Body2>
        <Typography className={classes.headThree} variant='h6'>
        Experiences We draw from:
        </Typography>
        <Body2 variant='body2'>
        Frontend/Backend, Product, Freelancing
        </Body2>
        <Typography className={classes.headThree} variant='h6'>
        Mentor Stats:
        </Typography>
        <Body2 variant='body2'>
        4+ years experience
        </Body2>
        <Body2 variant='body2'>
        10+ students
        </Body2>
        <Body2 variant='body2'>
        100+ mentor sessions
        </Body2>
        <Body2 variant='body2'>
        10+ group critiques
        </Body2>
      </CustomCol>

       
    {/* <Grid container justify='center' gridGap={'2em'} spacing={3}>
  <Grid item xs={4}>
    <Item>xs 8</Item>

  </Grid>

  <Grid 
  // className={classes.gridItem}
   item xs={4}>

    <Item>xs=4</Item>

  </Grid>

  <Grid item xs={4}>

    <Item>xs 4</Item>
  </Grid>
 
</Grid> */}
</Box>
    </Paper>
    </Box>
    <Box sx={{ my: 2 }}>
      {[...new Array(12)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
`,
        )
        .join('\n')}
    </Box>
   < ToastContainer />
    </React.Fragment>
  )
}

const tab = __tablet();


    return (
        <Container maxWidth="sx">
        {tab ? <MiniDrawer content={pageContent} /> : pageContent()}
      </Container>
      
    )
}



export default LandingPage;