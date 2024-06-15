<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        let labels = [];
        let data = [];
        for (let i = 1; i <= 31; i++){
            labels.push(i + '.01.2024');
            data.push(i);
        }
      return {
        chartData: {
          labels: labels,
          datasets: [
            {
                data: data,
                backgroundColor: '#05386b',
                borderColor: '#05386b',
            }
        ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any styles you need for the component */
  </style>
  