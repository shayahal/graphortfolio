const lineGraph = {
  type: 'line',
  title: 'Mock Line Chart',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Mock Line',
        data: [10, 25, 18, 30, 22],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Mock Line Chart' },
      tooltip: { enabled: true },
    },
  },
};
export default lineGraph; 