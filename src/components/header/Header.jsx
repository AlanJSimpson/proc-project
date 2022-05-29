import { Box } from '@mui/material';
import logoMaysa from '../../assets/images/logo-em-pe.png';
import './header.css';

export default function header() {
  return (
    <Box className='header-box'>
      <img
        height='300px'
        src={logoMaysa}
        alt='logo fonoaudiologa maysa frexeira'
      ></img>
    </Box>
  );
}
