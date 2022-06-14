import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import logoDeitado from '../../assets/images/logo-deitado.png';
import './footer.css';

export default function Footer() {
  return (
    <Box className='footer-box'>
      <Box>
        <img
          height='200px'
          src={logoDeitado}
          alt='logo fonoaudióloga Maysa Frexeira'
        ></img>
      </Box>
      <Box className='social-media-box'>
        <IconButton>
          <WhatsAppIcon />
          <a
            target='_blank'
            href='https://wa.me/5581993363439'
            rel='noreferrer'
          >
            (81) 9-93363439
          </a>
        </IconButton>
        <IconButton>
          <InstagramIcon />
          <a
            target='_blank'
            href='https://www.instagram.com/fonomaysa.frexeira/?igshid=YmMyMTA2M2Y='
            rel='noreferrer'
          >
            Fga. Maysa Frexeira
          </a>
        </IconButton>
      </Box>
    </Box>
  );
}
