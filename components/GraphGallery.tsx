import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import graphs from '../graphs';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

// Enhance chart title appearance for all chart.js graphs
const enhancedGraphs = graphs.map(graph => {
  if ('options' in graph && graph.options && 'plugins' in graph.options) {
    const enhancedOptions = {
      ...graph.options,
      plugins: {
        ...graph.options.plugins,
        title: {
          ...graph.options.plugins?.title,
          font: {
            size: 24,
            weight: 700,
          },
          color: '#222',
          padding: { top: 10, bottom: 20 },
        },
      },
    };
    return { ...graph, options: enhancedOptions };
  }
  return graph;
});

function renderGraph(graph: any, idx: number) {
  switch (graph.type) {
    case 'bar':
      return <Bar data={graph.data} options={graph.options} />;
    case 'line':
      return <Line data={graph.data} options={graph.options} />;
    case 'pie':
      return <Pie data={graph.data} options={graph.options} />;
    case 'number':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{graph.title}</div>
          <div style={{ fontSize: 64, fontWeight: 900, color: '#2b6cb0', lineHeight: 1 }}>{graph.value} <span style={{ fontSize: 28, fontWeight: 400 }}>{graph.unit}</span></div>
        </div>
      );
    default:
      return <div>Unknown graph type</div>;
  }
}

export default function GraphGallery() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      alignItems: 'start',
    }}>
      {enhancedGraphs.map((graph, idx) => (
        <div key={idx} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0001', padding: 24 }}>
          <div style={{ height: 350 }}>{renderGraph(graph, idx)}</div>
        </div>
      ))}
    </div>
  );
} 