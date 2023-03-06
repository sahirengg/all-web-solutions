import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme =  createTheme({
  palette: {
    common : {
        
    },
    primary: {
        main: '#00bcd4',
      },
      secondary: {
        main: '#00bcd4',
      },
       breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
    text : {
      secondary: "#454545"
    }
  }
      // info: {
      //   // main: theme.palette.secondary.main,
      // },
  },
  typography: {
    fontFamily: [
      '-apple-system',
    ].join(',')
  },
  unstable_sxConfig: {
    border:{
      borders: '1px solid #454545'
    }
  }
});


