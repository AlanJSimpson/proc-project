import { Box, Grid, TextField, Typography } from '@mui/material';
import { ChangeEventHandler, useEffect, useState } from 'react';
import ProcChart from '../proc-chart/ProcChart';

import './procForm.css';

export default function ProcForm(): JSX.Element {
  const [inputHC, setInputHC] = useState(0);
  const [inputCLO, setInputCLO] = useState(0);
  const [inputADC, setInputADC] = useState(0);
  const [inputTotalValues, setInputTotalValues] = useState(0);

  useEffect(() => {
    setInputTotalValues(inputHC + inputCLO + inputADC);
  }, [inputHC, inputCLO, inputADC]);

  const handleChangeHC: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputHC(Number(e.target.value));
  };

  const handleChangeCLO: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputCLO(Number(e.target.value));
  };

  const handleChangeADC: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputADC(Number(e.target.value));
  };

  return (
    <Box className='form-box'>
      <Box className='form-titles'>
        <Typography
          component='h1'
          variant='h3'
          fontFamily={'Cormorant Garamond'}
        >
          PROC - Protocolo de observação comportamental
        </Typography>
        <Typography
          component='h2'
          variant='h4'
          fontFamily={'Cormorant Garamond'}
        >
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
            type='number'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className='proc-form-item'
            label='Compreensão da linguagem oral'
            value={inputCLO}
            onInput={handleChangeCLO}
            variant='standard'
            type='number'
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            className='proc-form-item'
            label='Aspectos do desenvolvimento cognitivo'
            variant='standard'
            value={inputADC}
            onInput={handleChangeADC}
            type='number'
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Total da pontuação'
            value={inputTotalValues}
            type='number'
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
