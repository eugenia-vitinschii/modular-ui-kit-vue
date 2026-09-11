<template>
   <div class="muk-chart">
      <div v-if="title" class="muk-chart__header">
         <muk-text>{{ title }}</muk-text>
      </div>
      <div v-if="loading" class="muk-chart__loading" :style="{ height }">
         <muk-skeleton width="100%" height="100%" />
      </div>
      <div v-else-if="isEmpty" class="muk-chart__empty" :style="{ height }">
         <muk-empty-state height="100%" width="100%" />
      </div>
      <div v-else class="muk-chart__wrapper" :style="{ height }">
         <canvas ref="canvasRef"></canvas>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref, computed, onMounted, watch, onUnmounted, nextTick } from 'vue'
/* CHART JS */
import { Chart, registerables, type ChartData, type ChartOptions, type ChartType } from 'chart.js';

/* COMPONENTS */
import MukText from '../typography/MukText.vue';
import MukSkeleton from '../feedback/MukSkeleton.vue';
import MukEmptyState from '../feedback/MukEmptyState.vue';

//chart modules
Chart.register(...registerables)

/* PROPS */
interface Props {
   title?: string
   loading?: boolean
   emptyText?: string
   height?: string
   type?: ChartType
   data: ChartData | null
   options?: ChartOptions
}

const props = withDefaults(defineProps<Props>(), {
   loading: false,
   emptyText: 'No data available',
   height: '300px',
   type: 'bar',
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

//empty
const isEmpty = computed(() => {
   if (!props.data || !props.data.datasets || props.data.datasets.length === 0) return true
   return props.data.datasets.every((dataset) => !dataset.data || dataset.data.length === 0)
})

//initchart
function initChart() {
   if (!canvasRef.value || !props.data || isEmpty.value) return

   destroyChart()

   const defaultOptions: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false
   }

   chartInstance = new Chart(canvasRef.value, {
      type: props.type,
      data: props.data,
      options: { ...defaultOptions, ...props.options }
   })
}

function destroyChart() {
   if (chartInstance) {
      chartInstance.destroy()
      chartInstance = null
   }
}

onMounted(() => {
   if (!props.loading && !isEmpty.value) {
      initChart()
   }
})

watch(
   [() => props.data, () => props.type, () => props.loading],
   async () => {
      if (props.loading || isEmpty.value) {
         destroyChart()
         return
      }
      await nextTick()
      initChart()
   },
   { deep: true }
)

onUnmounted(() => {
   destroyChart()
})
</script>
