<script setup lang="ts">
import { computed } from 'vue'
import { regionGeoJson } from '../data/geo'
import { mapPoints } from '../data/dashboard'
import { echarts, type ECOption } from '../lib/echarts'
import EChartPanel from './EChartPanel.vue'

echarts.registerMap('region-board', regionGeoJson as never)

const mapOption = computed<ECOption>(() => ({
  tooltip: {
    trigger: 'item',
  },
  geo: {
    map: 'region-board',
    roam: false,
    zoom: 1.08,
    layoutCenter: ['50%', '52%'],
    layoutSize: '92%',
    itemStyle: {
      areaColor: '#143a72',
      borderColor: '#61d9ff',
      borderWidth: 1.4,
      shadowBlur: 24,
      shadowColor: 'rgba(16, 118, 255, 0.35)',
    },
    emphasis: {
      itemStyle: {
        areaColor: '#1f6fff',
      },
      label: {
        color: '#ffffff',
      },
    },
    label: {
      show: true,
      color: 'rgba(220, 238, 255, 0.82)',
      fontSize: 12,
    },
  },
  series: [
    {
      name: '区域热度',
      type: 'map',
      map: 'region-board',
      geoIndex: 0,
      data: [
        { name: '西北', value: 68 },
        { name: '西南', value: 86 },
        { name: '华北', value: 108 },
        { name: '东北', value: 72 },
        { name: '华中', value: 94 },
        { name: '华东', value: 126 },
        { name: '华南', value: 115 },
      ],
      itemStyle: {
        areaColor: '#153b74',
        borderColor: '#66e1ff',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#2ab6ff',
        },
      },
    },
    {
      name: '核心节点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      rippleEffect: {
        scale: 4,
        brushType: 'stroke',
      },
      symbolSize: (value: number[]) => Math.max(value[2] / 8, 10),
      itemStyle: {
        color: '#ffd166',
        shadowBlur: 16,
        shadowColor: 'rgba(255, 209, 102, 0.45)',
      },
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
        color: '#f6fbff',
      },
      data: mapPoints,
    },
  ],
  visualMap: {
    min: 60,
    max: 130,
    calculable: false,
    orient: 'horizontal',
    left: 'center',
    bottom: '2%',
    textStyle: {
      color: 'rgba(220, 238, 255, 0.76)',
    },
    inRange: {
      color: ['#0d2a5f', '#1f6fff', '#45e0ff'],
    },
  },
}))
</script>

<template>
  <div class="map-board">
    <div class="map-board__summary">
      <span>全国区域态势</span>
      <strong>7 大区域 / 5 个核心节点</strong>
    </div>
    <EChartPanel :option="mapOption" />
  </div>
</template>
