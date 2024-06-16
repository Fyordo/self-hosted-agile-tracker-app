<template>
  <Bar
    :options="this.chartOptions"
    :data="this.chartData"
  />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)

export default {
  mounted() {
    let labels = [];
    let data = [];
    for (let i = 0; i < this.graphData.length; i++){
      let graphElem = this.graphData[i];
      labels.push(graphElem.date);
      data.push(graphElem.hours + (graphElem.minutes / 60) + (graphElem.seconds / 3600));
    }
    this.chartData = {
        labels: labels,
        datasets: [
          {
              data: data,
              backgroundColor: '#05386b',
              borderColor: '#05386b',
          }
      ]
    };
  },
  props: {
      graphData: Array,
  },
  components: {
    Bar
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
              data: [],
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
  