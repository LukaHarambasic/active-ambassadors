<script>
import Chart from 'chart.js'
import { Pie } from 'vue-chartjs'

const pluginConfig = {
  id: 'my-plugin',
  beforeRender: (chart) => {
    if (chart.config.options.showAllTooltips) {
      // create an array of tooltips
      // we can't use the chart tooltip because there is only one tooltip per chart
      chart.pluginTooltips = []
      chart.config.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((sector, j) => {
          chart.pluginTooltips.push(
            new Chart.Tooltip(
              {
                _chart: chart.chart,
                _chartInstance: chart,
                _data: chart.data,
                _options: chart.options.tooltips,
                _active: [sector]
              },
              chart
            )
          )
        })
      })

      // turn off normal tooltips
      chart.options.tooltips.enabled = false
    }
  },
  afterDraw: (chart, easing) => {
    if (chart.config.options.showAllTooltips) {
      // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
      if (!chart.allTooltipsOnce) {
        if (easing !== 1) return
        chart.allTooltipsOnce = true
      }
      // turn on tooltips
      chart.options.tooltips.enabled = true
      Chart.helpers.each(chart.pluginTooltips, (tooltip) => {
        tooltip.initialize()
        tooltip.update()
        // we don't actually need this since we are not animating tooltips
        tooltip.pivot()
        tooltip.transition(easing).draw()
      })
      chart.options.tooltips.enabled = false
    }
  }
}

export default {
  extends: Pie,
  data() {
    return {
      expensesPerUnit: [
        {
          title: 'Transfer Paper',
          expense: 0.65
        },
        {
          title: 'Envelope',
          expense: 0.59
        },
        {
          title: 'Printing',
          expense: 0.1
        },
        {
          title: 'Postage',
          expense: 1
        },
        {
          title: 'Overhead',
          expense: 0.66
        }
      ]
    }
  },
  mounted() {
    this.addPlugin(pluginConfig)
    this.renderPieChart()
  },
  methods: {
    renderPieChart() {
      if (process.browser) {
        const colors = ['#E82C4E', '#EC5771', '#F18195', '#F6ABB8', '#FAD5DC']
        const expensesPerUnit = this.expensesPerUnit
          .sort((a, b) => b.expense - a.expense)
          .map((item, index) => ({ ...item, color: colors[index] }))
        this.renderChart(
          {
            labels: expensesPerUnit.map((item) => item.title),
            datasets: [
              {
                backgroundColor: expensesPerUnit.map((item) => item.color),
                data: expensesPerUnit.map((item) => item.expense)
              }
            ]
          },
          {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            showAllTooltips: true
          }
        )
      }
    }
  }
}
</script>
