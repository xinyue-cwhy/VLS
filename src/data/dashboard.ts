import type { ECOption, ResponsiveECOption } from '../lib/echarts'
import type { MapPoint, StatItem } from '../types'

export const statItems: StatItem[] = [
  { label: '总接入设备', value: '28,416', unit: '台', trend: '+12.6%', accent: '#45e0ff' },
  { label: '今日处理订单', value: '6,982', unit: '单', trend: '+8.4%', accent: '#5bffb1' },
  { label: '实时在线率', value: '98.2', unit: '%', trend: '+1.3%', accent: '#ffd166' },
  { label: '当日告警闭环', value: '1,246', unit: '次', trend: '+16.9%', accent: '#ff8a65' },
]

const axisLabelStyle = {
  color: 'rgba(220, 238, 255, 0.72)',
  fontSize: 11,
}

const splitLineStyle = {
  lineStyle: {
    color: 'rgba(89, 156, 255, 0.14)',
  },
}

const leftMiddleData = [
  { value: 35, name: '设备监测' },
  { value: 24, name: '生产追踪' },
  { value: 19, name: '能耗管理' },
  { value: 14, name: '安防预警' },
  { value: 8, name: '其他' },
]

const rightMiddleData = [
  { name: '在线', value: 72 },
  { name: '待维护', value: 18 },
  { name: '离线', value: 10 },
]

export const leftTopOption: ECOption = {
  tooltip: { trigger: 'axis' },
  grid: { left: 24, right: 16, top: 28, bottom: 24 },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    axisLabel: axisLabelStyle,
    axisLine: { lineStyle: { color: 'rgba(120, 170, 255, 0.22)' } },
  },
  yAxis: {
    type: 'value',
    axisLabel: axisLabelStyle,
    splitLine: splitLineStyle,
  },
  series: [
    {
      type: 'line',
      smooth: true,
      showSymbol: false,
      data: [820, 932, 901, 1134, 1290, 1330, 1420],
      lineStyle: { color: '#45e0ff', width: 3 },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(69, 224, 255, 0.35)' },
            { offset: 1, color: 'rgba(69, 224, 255, 0.03)' },
          ],
        },
      },
    },
  ],
}

export const leftMiddleOption: ECOption = {
  tooltip: { trigger: 'item' },
  legend: {
    bottom: 8,
    textStyle: { color: 'rgba(220, 238, 255, 0.72)' },
  },
  series: [
    {
      type: 'pie',
      radius: ['42%', '68%'],
      center: ['50%', '46%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#07182b',
        borderWidth: 4,
      },
      label: {
        color: '#dceeff',
        formatter: '{b}\n{d}%',
      },
      data: leftMiddleData,
      color: ['#45e0ff', '#5bffb1', '#ffd166', '#ff8a65', '#7a86ff'],
    },
  ],
}

export const leftMiddleResponsiveOption: ResponsiveECOption = {
  tooltip: { trigger: 'item' },
  legend: {
    bottom: 8,
    textStyle: { color: 'rgba(220, 238, 255, 0.72)', fontSize: 11 },
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '66%'],
      center: ['50%', '42%'],
      avoidLabelOverlap: true,
      minShowLabelAngle: 8,
      itemStyle: {
        borderColor: '#07182b',
        borderWidth: 4,
      },
      labelLine: {
        length: 10,
        length2: 8,
        lineStyle: {
          color: 'rgba(220, 238, 255, 0.35)',
        },
      },
      labelLayout: {
        hideOverlap: true,
      },
      label: {
        color: '#dceeff',
        fontSize: 11,
        formatter: '{b}\n{d}%',
      },
      data: leftMiddleData,
      color: ['#45e0ff', '#5bffb1', '#ffd166', '#ff8a65', '#7a86ff'],
    },
  ],
  media: [
    {
      query: { maxWidth: 360 },
      option: {
        legend: {
          bottom: 0,
          itemWidth: 8,
          itemHeight: 8,
          textStyle: { color: 'rgba(220, 238, 255, 0.72)', fontSize: 10 },
        },
        series: [
          {
            type: 'pie',
            radius: ['48%', '72%'],
            center: ['50%', '40%'],
            minShowLabelAngle: 12,
            data: leftMiddleData,
            label: { show: false },
            labelLine: { show: false },
          },
        ],
      },
    },
  ],
}

export const leftBottomOption: ECOption = {
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: 86, right: 24, top: 16, bottom: 20 },
  xAxis: {
    type: 'value',
    axisLabel: axisLabelStyle,
    splitLine: splitLineStyle,
  },
  yAxis: {
    type: 'category',
    axisLabel: { ...axisLabelStyle, width: 64, overflow: 'truncate' },
    axisLine: { show: false },
    axisTick: { show: false },
    data: ['华东一区', '华南二区', '西南中心', '华北园区', '西北基地'],
  },
  series: [
    {
      type: 'bar',
      barWidth: 12,
      data: [96, 88, 80, 74, 69],
      itemStyle: {
        borderRadius: [0, 8, 8, 0],
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            { offset: 0, color: '#1c65ff' },
            { offset: 1, color: '#45e0ff' },
          ],
        },
      },
    },
  ],
}

export const rightTopOption: ECOption = {
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: 28, right: 18, top: 28, bottom: 24 },
  xAxis: {
    type: 'category',
    axisLabel: axisLabelStyle,
    axisLine: { lineStyle: { color: 'rgba(120, 170, 255, 0.22)' } },
    data: ['消防', '门禁', '烟感', '巡检', '视频', '其他'],
  },
  yAxis: {
    type: 'value',
    axisLabel: axisLabelStyle,
    splitLine: splitLineStyle,
  },
  series: [
    {
      type: 'bar',
      barWidth: 18,
      data: [42, 35, 31, 26, 21, 16],
      itemStyle: {
        borderRadius: [8, 8, 0, 0],
        color: {
          type: 'linear',
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: '#1c65ff' },
            { offset: 1, color: '#5bffb1' },
          ],
        },
      },
    },
  ],
}

export const rightMiddleOption: ResponsiveECOption = {
  tooltip: { trigger: 'item' },
  legend: {
    bottom: 0,
    left: 'center',
    icon: 'circle',
    itemWidth: 8,
    itemHeight: 8,
    textStyle: { color: 'rgba(220, 238, 255, 0.72)', fontSize: 11 },
  },
  graphic: [
    {
      type: 'group',
      left: 'center',
      top: '39%',
      children: [
        {
          type: 'text',
          style: {
            text: '设备状态',
            fill: 'rgba(220, 238, 255, 0.62)',
            fontSize: 12,
          },
          left: 'center',
        },
        {
          type: 'text',
          top: 18,
          style: {
            text: '100%',
            fill: '#f6fbff',
            fontSize: 24,
            fontWeight: 700,
          },
          left: 'center',
        },
      ],
    },
  ],
  series: [
    {
      type: 'pie',
      radius: ['48%', '72%'],
      center: ['50%', '40%'],
      avoidLabelOverlap: true,
      minShowLabelAngle: 10,
      label: {
        show: true,
        color: '#dceeff',
        fontSize: 11,
        formatter: '{b}\n{c}%',
      },
      labelLine: {
        length: 10,
        length2: 8,
        lineStyle: {
          color: 'rgba(220, 238, 255, 0.35)',
        },
      },
      labelLayout: {
        hideOverlap: true,
      },
      data: rightMiddleData,
      color: ['#5bffb1', '#ffd166', '#ff6b6b'],
      itemStyle: {
        borderColor: '#07182b',
        borderWidth: 4,
      },
    },
  ],
  media: [
    {
      query: { maxWidth: 360 },
      option: {
        legend: {
          bottom: 0,
          textStyle: { color: 'rgba(220, 238, 255, 0.72)', fontSize: 10 },
        },
        graphic: [
          {
            type: 'group',
            left: 'center',
            top: '38%',
            children: [
              {
                type: 'text',
                style: {
                  text: '设备状态',
                  fill: 'rgba(220, 238, 255, 0.62)',
                  fontSize: 10,
                },
                left: 'center',
              },
              {
                type: 'text',
                top: 14,
                style: {
                  text: '100%',
                  fill: '#f6fbff',
                  fontSize: 18,
                  fontWeight: 700,
                },
                left: 'center',
              },
            ],
          },
        ],
        series: [
          {
            type: 'pie',
            radius: ['54%', '78%'],
            center: ['50%', '39%'],
            data: rightMiddleData,
            label: { show: false },
            labelLine: { show: false },
          },
        ],
      },
    },
  ],
}

export const rightBottomOption: ECOption = {
  tooltip: { trigger: 'axis' },
  legend: {
    top: 2,
    right: 12,
    textStyle: { color: 'rgba(220, 238, 255, 0.72)' },
  },
  grid: { left: 30, right: 20, top: 42, bottom: 22 },
  xAxis: {
    type: 'category',
    axisLabel: axisLabelStyle,
    axisLine: { lineStyle: { color: 'rgba(120, 170, 255, 0.22)' } },
    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
  },
  yAxis: {
    type: 'value',
    axisLabel: axisLabelStyle,
    splitLine: splitLineStyle,
  },
  series: [
    {
      name: '产值',
      type: 'bar',
      barWidth: 14,
      data: [220, 268, 301, 334, 390, 420],
      itemStyle: {
        borderRadius: [6, 6, 0, 0],
        color: '#1c65ff',
      },
    },
    {
      name: '同比',
      type: 'line',
      smooth: true,
      showSymbol: false,
      data: [180, 210, 258, 302, 336, 370],
      lineStyle: { width: 3, color: '#ffd166' },
    },
  ],
}

export const mapPoints: MapPoint[] = [
  { name: '北京', value: [116.4, 39.9, 98] },
  { name: '上海', value: [121.47, 31.23, 122] },
  { name: '广州', value: [113.27, 23.13, 88] },
  { name: '成都', value: [104.06, 30.67, 76] },
  { name: '西安', value: [108.95, 34.27, 64] },
]
