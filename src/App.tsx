import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ProcForm from './components/proc-form/ProcForm';
import theme from './theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container className='App'>
        <ProcForm />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
