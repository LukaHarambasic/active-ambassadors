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
  computed: {
    expensesPerKit() {
      return this.$store.state.expensesPerKit
    }
  },
  mounted() {
    this.addPlugin(pluginConfig)
    this.renderPieChart()
  },
  methods: {
    renderPieChart() {
      if (process.browser) {
        const color = (percentage) => `rgba(232,44,78, ${percentage}%)`
        // const colors = ['#E82C4E', '#EC5771', '#F18195', '#F6ABB8', '#FAD5DC']
        const expensesCopy = Array.from(this.expensesPerKit)
        const expensesLength = expensesCopy.length
        const expenses = expensesCopy
          .sort((a, b) => b.amount - a.amount)
          .map((item, index) => ({
            ...item,
            color: color((expensesLength - index) * (100 / expensesLength))
          }))
        this.renderChart(
          {
            labels: expenses.map((item) => item.title),
            datasets: [
              {
                backgroundColor: expenses.map((item) => item.color),
                data: expenses.map((item) => item.amount)
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
