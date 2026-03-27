<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="panel-card">
    <header class="panel-header">
      <div>
        <h3>{{ title }}</h3>
        <p v-if="subtitle">{{ subtitle }}</p>
      </div>
      <span class="panel-header__tag">LIVE</span>
    </header>
    <div class="panel-content">
      <slot />
    </div>
  </section>
</template>
