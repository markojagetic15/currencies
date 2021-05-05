import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ["Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday"],
          maintainAspectRatio: true,
      datasets: [
        {
          label: "hide",
          backgroundColor: '#ccc999',
          data: [7.566274,7.558778,7.553299	,7.552285	,7.552285,7.552285,7.547556],
          borderWidth: 0
        }
      ]
    })
  }
}

