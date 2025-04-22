import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['A', 'B', 'C'],
  datasets: [
    {
      label: 'Mock Data',
      data: [20, 14, 23],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Mock Bar Chart',
    },
    tooltip: {
      enabled: true,
    },
  },
};

export default function GraphGallery() {
  return (
    <div style={{ height: 400 }}>
      <h3>Example Graph</h3>
      <Bar data={data} options={options} />
    </div>
  );
} 