import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const HC_CONSTANTE = 70;
const CLO_CONSTANTE = 60;
const ADC_CONSTANTE = 70;
const TOTAL_CONSTANTE = 200;

export default function ProcChart({ HC, ADC, CLO, total }) {
  const data = [
    {
      name: 'Habilidade comunicativa',
      'Pontuação máxima': HC_CONSTANTE,
      'Pontuação alcançada': HC,
    },
    {
      name: 'Compreensão da linguagem oral',
      'Pontuação máxima': ADC_CONSTANTE,
      'Pontuação alcançada': ADC,
    },
    {
      name: 'Aspecto do desenvolvimento cognitivo',
      'Pontuação máxima': CLO_CONSTANTE,
      'Pontuação alcançada': CLO,
    },
    {
      name: 'Total da pontuação',
      'Pontuação máxima': TOTAL_CONSTANTE,
      'Pontuação alcançada': total,
    },
  ];

  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='Pontuação máxima' fill='#8884d8' />
      <Bar dataKey='Pontuação alcançada' fill='#82ca9d' />
    </BarChart>
  );
}
