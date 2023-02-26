import React,{Suspense,lazy} from 'react';
import {Box} from "@mui/system";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MiniDrawer from "../../components/Mobile-components/Drawer/drawer";
import { __tablet } from "../../common-components/matches";
import ClientsProjectsHours from '../../components/about-us/clients-projects-hours'



const AboutImg =  lazy(()=>import('./aboutUSImg'))

const AboutUs = () => {
  const tab = __tablet();
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
      }));

      const content = () => {
        return (
          <>
          <Box>
             <Suspense fallback={<div>Loading.....</div>}>
            <AboutImg  />
              </Suspense> 
  
          </Box>
          <Box sx={{paddingTop: '40px'}}>
          <Typography paragraph={true} variant="body2" gutterBottom>
          We work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free. Regardless of your specific business requirements, in solving these challenges, you have a great chance of finding success online.
        </Typography>
        <Typography paragraph={true} variant="body2" gutterBottom>
        Our main experience is in front-end development but We also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, We believe having experience in both design and development allows for making the most optimal user experiences.
  </Typography>
        <Typography paragraph={true} variant="body2" gutterBottom>
        Our clients have found that hiring me has saved them time and money, made it easier to grow their website alongside their business, and made for a product that is consistently of high quality.
  
        </Typography>
        </Box>
        <ClientsProjectsHours />
        <Box sx={{paddingTop: '40px'}} >
        <Typography paragraph={true} variant="body2" gutterBottom>
        We take great pride in not only being able to complete work to the high standard you expect but also go the extra mile wherever possible. We enjoy getting to know a business, its goals, and how we can best apply myself to make sure your website succeeds. For established clients, We particularly like analysing their metrics and making data-based decisions and recommendations, leading to better rates of success.  </Typography>
        <Typography paragraph={true} variant="body2" gutterBottom>
        We can quickly and efficiently join your team using continuous-integration methods and tools such as Git and Agile.

  
        </Typography>
        </Box>
      </>
        )
      }
    return (
    <React.Fragment>
     { tab ?   <MiniDrawer content={content}   /> : content()}
    </React.Fragment>
    
    )
}

export default AboutUs;