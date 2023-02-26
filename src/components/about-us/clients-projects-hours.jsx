import React from "react";
import Grid from '@mui/material/Grid';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import Typography from '@mui/material/Typography';

const ClientsProjectsHours = () => {
    const theme = useTheme();
    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    }));
    return <>
        <Grid sx={{ padding: '30px 0 0 0', }} container direction='row' justifyContent='space-around' alignItems='flex-end'>
            <Grid sx={4} item >
                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Grid item sm={4} xs={6}>
                        <AccessibilityOutlinedIcon sx={{ color: theme.palette.primary.main }} fontSize="large" />
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <Typography variant='h4'>40+</Typography>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <Typography variant='h6'>Clients</Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Grid sx={4} item >
                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Grid item sm={4} xs={6}>
                        <AudiotrackOutlinedIcon sx={{ color: theme.palette.primary.main }} fontSize="large" />
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <Typography variant='h4'>20+</Typography>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <Typography variant='h6'>Projects</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sm={4} sx={4} item >
                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Grid item sm={4} xs={6}>
                        <AccessTimeOutlinedIcon sx={{ color: theme.palette.primary.main }} fontSize="large" />
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <Typography variant='h4'>1000+</Typography>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <Typography variant='h6'>hours of support</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
}


export default ClientsProjectsHours;