import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import Header from './components/header/Header';
import ProcForm from './components/proc-form/ProcForm';
import theme from './theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container className='App'>
        <Header />
        <ProcForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
