const pieGraph = {
  type: 'pie',
  title: "Projects I've started",
  notes: "I am a dreamer",
  data: {
    labels: ['Not finished', 'This website'],
    datasets: [
      {
        label: 'Projects',
        data: [98, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)', // Not finished
          'rgba(54, 162, 235, 0.7)', // This website
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: "Projects I've started" },
      tooltip: { enabled: true },
    },
  },
};
export default pieGraph; 