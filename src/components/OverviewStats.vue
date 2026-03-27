<script setup lang="ts">
import { statItems } from '../data/dashboard'
</script>

<template>
  <div class="stats-grid">
    <article
      v-for="item in statItems"
      :key="item.label"
      class="stat-card"
      :style="{ '--accent': item.accent }"
    >
      <p class="stat-label">{{ item.label }}</p>
      <div class="stat-value-row">
        <strong class="stat-value">{{ item.value }}</strong>
        <span class="stat-unit">{{ item.unit }}</span>
      </div>
      <div class="stat-footer">
        <span>较昨日</span>
        <b>{{ item.trend }}</b>
      </div>
    </article>
  </div>
</template>
