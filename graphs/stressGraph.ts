const stressGraph = {
  type: 'line',
  title: 'My stress levels in life',
  data: {
    labels: [
      '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006',
      '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'
    ],
    datasets: [
      {
        label: 'Stress Level',
        data: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1, 4, 2, 2.2, 2.5, 2.7, 3, 3, 3, 3],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: [
          ...Array(12).fill('rgba(255, 206, 86, 1)'), // 1994-2005
          'rgba(255, 99, 132, 1)', // 2006 Bat Mitzva
          ...Array(7).fill('rgba(255, 206, 86, 1)'), // 2007-2013
          'rgba(54, 162, 235, 1)' // 2014 Army
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'My stress levels in life' },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context: any) {
            const year = context.label;
            if (year === '1994') return '0 (just born)';
            if (year === '2006') return '4 (Bat Mitzva dance)';
            if (year === '2014') return '3 (Army)';
            return context.formattedValue;
          }
        }
      },
    },
    scales: {
      y: {
        title: { display: true, text: 'Stress Level' },
        min: 0,
        max: 5,
      },
      x: {
        title: { display: true, text: 'Year' },
      },
    },
  },
};
export default stressGraph; 