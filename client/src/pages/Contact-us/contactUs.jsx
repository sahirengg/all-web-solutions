import React, { useEffect } from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PlaceIcon from '@mui/icons-material/Place';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useTheme } from '@mui/material/styles';
import LetsDiscussForm  from "../../components/Lets-discuss-form/letsDiscussForm";

const AddEmail = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#F8F9FA' : '#F8F9FA',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
}));

const ITEM = styled(Paper)(({ theme }) => ({
    // backgroundColor: 'red',
    height: 'auto',
    width: '100%',
    padding: '20px'
}))

const CustomTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    marginBottom: '25px',
    // height:'100px'
    // display:'block'
}))

const menuItems = [{ id: 1, tp: 'Not/Sure to be determined' }, { id: 2, tp: 'In 1 months' }, { id: 3, tp: 'In 2 months' }, { id: 4, tp: 'In 3 months' }, { id: 5, tp: 'In 4 months or above' }]

const ContactUs = () => {
    const theme = useTheme()
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <Box sx={{ padding: '50px 0 50px 0' }}>
            <Grid container spacing={2} justifyContent="space-around" >
                <Grid item sx={6}>
                    {/* <ITEM >Lets, talk</ITEM> */}
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4">Let's Discuss</Typography>
                    <Typography sx={{ fontSize: '18px', color: '#808080', paddingTop: '10px' }} variant='body1'>your projects and ideas. We're exited to start!</Typography>
                   <LetsDiscussForm />
                </Grid>
                <Grid item sx={6}>
                    <Box sx={{ marginTop: '50px' }}>
                        <ITEM>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '26px', display: 'block' }} variant='body1 ' >We create creative projects and designs.</Typography>
                            <Typography variant='paragraph'>Have an exciting new venture in mind? like to know more about our services<br /> and how We can help your business? every new project start with a conversation <br /> so let's grab a coffee and talk about you.</Typography>
                        </ITEM>
                        <Stack sx={{ paddingTop: '30px' }} spacing={3}>
                            {/* <AddEmail>AddEmail 1</AddEmail> */}
                            
                            <AddEmail>
                            <PlaceIcon sx={{float:'left', color: theme.palette.primary.main }} fontSize="large" />
                                Bareilly, Uttar Pradesh, India 243006</AddEmail>
                            <AddEmail sx={{padding: '13px'}}>
                                <EmailOutlinedIcon sx={{ float:'left', color: theme.palette.primary.main }} />
                                Email: info@awsolutionsltd.com</AddEmail>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )

}


export default ContactUs;