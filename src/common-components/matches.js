import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
  
export const __tablet = () => {
  const theme = useTheme();
   const vars = useMediaQuery(theme.breakpoints.down('sm'))
   return vars;
};
