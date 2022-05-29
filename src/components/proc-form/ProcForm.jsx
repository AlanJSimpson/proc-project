import { Box, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ProcChart from '../proc-chart/ProcChart';

import './procForm.css';

export default function ProcForm() {
  const [inputHC, setInputHC] = useState('');
  const [inputCLO, setInputCLO] = useState('');
  const [inputADC, setInputADC] = useState('');
  const [inputTotalValues, setInputTotalValues] = useState(0);

  useEffect(() => {
    setInputTotalValues(Number(inputHC) + Number(inputCLO) + Number(inputADC));
  }, [inputHC, inputCLO, inputADC]);

  const handleChangeHC = (e) => {
    setInputHC(e.target.value);
  };

  const handleChangeCLO = (e) => {
    setInputCLO(e.target.value);
  };

  const handleChangeADC = (e) => {
    setInputADC(e.target.value);
  };

  return (
    <Box className='form-box'>
      <Box className='form-titles'>
        <Typography component='h1' variant='h3'>
          PROC - Protocolo de observação comportamental
        </Typography>
        <Typography component='h2' variant='h4'>
          Avaliação de linguagem e aspectos cognitivos infantis
        </Typography>
      </Box>
      <Grid
        container
        rowSpacing={4}
        sx={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <Grid item xs={4}>
          <TextField
            className='proc-form-item'
            label='Habilidades comunicativas'
            variant='standard'
            value={inputHC}
            onInput={handleChangeHC}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className='proc-form-item'
            label='Compreensão da linguagem oral'
            value={inputCLO}
            onInput={handleChangeCLO}
            variant='standard'
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            className='proc-form-item'
            label='Aspectos do desenvolvimento cognitivo'
            variant='standard'
            value={inputADC}
            onInput={handleChangeADC}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Total da pontuação'
            value={inputTotalValues}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
      <Box className='box-chart'>
        <ProcChart
          HC={inputHC}
          ADC={inputADC}
          CLO={inputCLO}
          total={inputTotalValues}
        />
      </Box>
    </Box>
  );
}
