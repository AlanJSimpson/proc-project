import { Container, ThemeProvider } from '@mui/material';

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
