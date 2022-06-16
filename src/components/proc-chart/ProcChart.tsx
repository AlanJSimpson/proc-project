import { Box, Button, Divider } from '@mui/material';
import FileSaver from 'file-saver';
import { useCallback } from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useCurrentPng } from 'recharts-to-png';
import './procChart.css';

const HC_CONSTANTE = 70;
const CLO_CONSTANTE = 60;
const ADC_CONSTANTE = 70;
const TOTAL_CONSTANTE = 200;

export default function ProcChart({
  HC,
  ADC,
  CLO,
  total,
}: {
  HC: number;
  ADC: number;
  CLO: number;
  total: number;
}): JSX.Element {
  const [getPng, { ref: barChart, isLoading }] = useCurrentPng();
  const [getPercentagePng, { ref: percentageChart }] = useCurrentPng();

  const handleDownload = useCallback(async () => {
    const png = await getPng();

    if (png) {
      FileSaver.saveAs(png, 'proc-chart.png');
    }
  }, [getPng]);

  const handleDownloadPng = useCallback(async () => {
    const png = await getPercentagePng();

    if (png) {
      FileSaver.saveAs(png, 'proc-percentage-chart.png');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPercentagePng]);

  const data = [
    {
      name: 'H. Comunicativas',
      'Pontuação máxima': HC_CONSTANTE,
      'Pontuação alcançada': HC,
    },
    {
      name: 'C. Linguagem Oral',
      'Pontuação máxima': CLO_CONSTANTE,
      'Pontuação alcançada': CLO,
    },
    {
      name: 'A.D. Cognitivo',
      'Pontuação máxima': ADC_CONSTANTE,
      'Pontuação alcançada': ADC,
    },
    {
      name: 'Total',
      'Pontuação máxima': TOTAL_CONSTANTE,
      'Pontuação alcançada': total,
    },
  ];

  const porcentageData = [
    {
      name: 'H. Comunicativas',
      'Pontuação alcançada': Math.round((HC * 100) / HC_CONSTANTE),
    },
    {
      name: 'C. Linguagem Oral',
      'Pontuação alcançada': Math.round((CLO * 100) / CLO_CONSTANTE),
    },
    {
      name: 'A.D. Cognitivo',
      'Pontuação alcançada': Math.round((ADC * 100) / CLO_CONSTANTE),
    },
    {
      name: 'Total',
      'Pontuação alcançada': Math.round((total * 100) / TOTAL_CONSTANTE),
    },
  ];

  return (
    <Box className='chart-box'>
      <BarChart width={730} height={250} data={data} ref={barChart}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='Pontuação máxima' fill='#AB4A30' />
        <Bar dataKey='Pontuação alcançada' fill='#D46A40' />
      </BarChart>

      <Divider />

      <BarChart
        width={730}
        height={250}
        data={porcentageData}
        ref={percentageChart}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <Tooltip />
        <Legend />
        <YAxis tickFormatter={(tick) => tick + '%'} />
        <Bar dataKey='Pontuação alcançada' fill='#D46A40' />
      </BarChart>

      <Button
        className='download-png-button'
        variant='contained'
        onClick={handleDownload}
      >
        {isLoading ? 'Downloading...' : 'Download proc'}
      </Button>
      <Button
        className='download-png-button'
        variant='contained'
        onClick={handleDownloadPng}
      >
        {isLoading ? 'Downloading...' : 'Download porcentagem proc'}
      </Button>
    </Box>
  );
}
