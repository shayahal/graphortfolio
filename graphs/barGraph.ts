const barGraph = {
  type: 'bar',
  title: 'Mock Bar Chart',
  data: {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'Mock Data',
        data: [20, 14, 23],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Mock Bar Chart' },
      tooltip: { enabled: true },
    },
  },
};
export default barGraph; 