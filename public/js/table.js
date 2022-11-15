const sumNutrients = async () => {
  const response = await fetch('/api/history', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  document.getElementById('calories').textContent = data[0].calorie_sum;
  document.getElementById('protein').textContent = data[0].protein_sum;
  document.getElementById('fat').textContent = data[0].fat_sum;
  document.getElementById('sodium').textContent = data[0].sodium_sum;
  document.getElementById('sugar').textContent = data[0].sugar_sum;
  document.getElementById('carbs').textContent = data[0].carbs_sum;

  let nutritionData = [
    data[0].calorie_sum,
    data[0].protein_sum,
    data[0].fat_sum,
    data[0].sodium_sum,
    data[0].sugar_sum,
    data[0].carbs_sum,
  ];

  const chartData = {
    labels: ['Calories', 'Protein', 'Fat', 'Sodium', 'Sugar', 'Carbs'],
    datasets: [
      {
        label: 'Daily Sum',
        data: nutritionData,
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(0, 0, 0, 0.2)',
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: 'pie',
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Nutrients',
        },
      },
    },
  };

  // render init block
  const myChart = new Chart(document.getElementById('myChart'), config);
};

sumNutrients();
