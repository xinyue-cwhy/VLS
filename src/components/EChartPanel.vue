<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { echarts, type EChartsType, type ResponsiveECOption } from '../lib/echarts'

const props = defineProps<{
  option: ResponsiveECOption
  autoresize?: boolean
}>()

const chartRef = ref<HTMLDivElement | null>(null)
let chart: EChartsType | null = null
let resizeObserver: ResizeObserver | null = null
const handleResize = () => {
  chart?.resize()
}

const renderChart = () => {
  if (!chartRef.value) {
    return
  }

  if (!chart) {
    chart = echarts.init(chartRef.value)
  }

  chart.setOption(props.option, { notMerge: true })
}

onMounted(() => {
  renderChart()

  if (props.autoresize !== false && chartRef.value) {
    resizeObserver = new ResizeObserver(() => {
      chart?.resize()
    })
    resizeObserver.observe(chartRef.value)
  }

  window.addEventListener('resize', handleResize)
})

watch(
  () => props.option,
  () => {
    renderChart()
  },
  { deep: true },
)

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  resizeObserver?.disconnect()
  chart?.dispose()
  resizeObserver = null
  chart = null
})
</script>

<template>
  <div ref="chartRef" class="chart-root" />
</template>
