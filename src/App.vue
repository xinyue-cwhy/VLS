<script setup lang="ts">
import PanelCard from './components/PanelCard.vue'
import EChartPanel from './components/EChartPanel.vue'
import OverviewStats from './components/OverviewStats.vue'
import MapBoard from './components/MapBoard.vue'
import {
  leftBottomOption,
  leftMiddleResponsiveOption,
  leftTopOption,
  rightBottomOption,
  rightMiddleOption,
  rightTopOption,
} from './data/dashboard'
</script>

<template>
  <div class="screen">
    <header class="screen-header">
      <div class="screen-header__meta">VUE3 + TS + ECHARTS + VITE</div>
      <h1>智慧运营可视化数据大屏</h1>
      <div class="screen-header__status">
        <span>数据更新时间 10:30:45</span>
        <i />
      </div>
    </header>

    <main class="screen-grid">
      <section class="screen-column">
        <PanelCard title="实时流量趋势" subtitle="24 小时接入波动">
          <EChartPanel :option="leftTopOption" />
        </PanelCard>
        <PanelCard title="业务构成占比" subtitle="当前能力分布">
          <EChartPanel :option="leftMiddleResponsiveOption" />
        </PanelCard>
        <PanelCard title="园区处理效率排行" subtitle="TOP 5 区域">
          <EChartPanel :option="leftBottomOption" />
        </PanelCard>
      </section>

      <section class="screen-column screen-column--center">
        <PanelCard title="核心指标总览" subtitle="今日关键经营指标">
          <OverviewStats />
        </PanelCard>
        <PanelCard title="区域业务地图" subtitle="地图热度与节点分布">
          <MapBoard />
        </PanelCard>
      </section>

      <section class="screen-column">
        <PanelCard title="告警类型统计" subtitle="当日事件分类">
          <EChartPanel :option="rightTopOption" />
        </PanelCard>
        <PanelCard title="设备运行状态" subtitle="在线健康度">
          <EChartPanel :option="rightMiddleOption" />
        </PanelCard>
        <PanelCard title="月度产值走势" subtitle="产值与同比变化">
          <EChartPanel :option="rightBottomOption" />
        </PanelCard>
      </section>
    </main>
  </div>
</template>
