<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Chart Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="demo-controls muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Demo Controls</muk-text>
                  <muk-checkbox v-model="isLoading" label="Loading State" />
                  <muk-checkbox v-model="showTitle" label="Show Title" />
                  <muk-checkbox v-model="isEmpty" label="Empty Data" />
               </div>
               <div class="muk-section">
                  <muk-text :type="'muk-subheading'"></muk-text>
                  <div class="muk-chart__wrapper">
                     <div class="muk-chart-item">
                        <muk-chart type="bar" :title="showTitle ? 'Monthly revenue ($)' : undefined"
                           :data="isEmpty ? emptyChartData : barChartData" :loading="isLoading" height="280px" />
                     </div>
                     <div class="muk-chart-item">
                        <muk-chart type="line" :title="showTitle ? 'User Acivity (2025- 2026)' : undefined"
                           :data="isEmpty ? emptyChartData : lineChartData" :loading="isLoading" height="280px" />
                     </div>
                     <div class="muk-chart-item">
                        <muk-chart type="doughnut" :title="showTitle ? 'Traffic Sources' : undefined"
                           :data="isEmpty ? emptyChartData : doughnutChartData" :loading="isLoading" height="280px" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue'
import type { ChartData } from 'chart.js'

/* COMPONENTS */
import MukText from '@/components/ui/typography/MukText.vue';
import MukChart from '@/components/ui/data-display/MukChart.vue';
import MukCheckbox from '@/components/ui/form/MukCheckbox.vue';

//demo controls
const isLoading = ref(false)
const showTitle = ref(true)
const isEmpty = ref(false)

/* CHART DATA */
const barChartData: ChartData<'bar'> = {
   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
   datasets: [
      {
         label: 'Revenue',
         data: [12000, 19000, 15000, 22000, 28000, 24000],
         backgroundColor: '#4f46e5',
         borderRadius: 6
      }
   ]
}


const lineChartData: ChartData<'line'> = {
   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
   datasets: [
      {
         label: 'Current Week',
         data: [65, 59, 80, 81, 56, 55, 40],
         borderColor: '#10b981',
         backgroundColor: 'rgba(16, 185, 129, 0.1)',
         tension: 0.3,
         fill: true
      },
      {
         label: 'Previous Week',
         data: [28, 48, 40, 19, 86, 27, 90],
         borderColor: '#9ca3af',
         borderDash: [5, 5],
         tension: 0.3
      }
   ]
}


const doughnutChartData: ChartData<'doughnut'> = {
   labels: ['Direct', 'Organic Search', 'Social Media', 'Referral'],
   datasets: [
      {
         data: [35, 40, 15, 10],
         backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444']
      }
   ]
}

const emptyChartData: ChartData = {
   labels: [],
   datasets: []
}
</script>
