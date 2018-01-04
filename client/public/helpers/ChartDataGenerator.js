const ChartDataGenerator = {
  lineChartData(data) {
    const dates = data.map(dataItem => dataItem.date);
    const impressions = data.map(dataItem => dataItem.impressions);
    return {
      labels: dates,
      datasets: [
        {
          label: 'Impressions',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgb(39, 138, 226)',
          borderColor: 'rgb(39, 138, 226)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgb(39, 138, 226)',
          pointBackgroundColor: 'rgb(39, 138, 226)',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgb(39, 138, 226)',
          pointHoverBorderColor: 'rgb(39, 138, 226)',
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
          data: impressions,
        },
      ],
    };
  },
};

export { ChartDataGenerator };
