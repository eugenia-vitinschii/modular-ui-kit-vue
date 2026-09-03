<template>
   <div class="muk-metric-card">
      <div class="muk-metric-card__data">
         <div class="muk-metric-card__data--head">
            <muk-text variant="muted" type="muk-subheading">Sales</muk-text>
            <muk-text variant="secondary">350,698</muk-text>
         </div>
         <div class="muk-metric-card__data--icon">
            <div class="muk-svg-icon">
               <slot name="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#e3e3e3">
                     <path
                        d="M439-480ZM240-80h119q-13-17-22-37t-14-43h-83l-1-437h1l202-203 197 203v118q21 0 41 3.5t39 11.5v-132q1-16-5-30.5T697-653L499-856q-12-12-26.5-18t-30.5-6q-15 0-30 6t-26 18L183-653q-11 11-17 25t-6 31v437q0 35 22.5 57.5T240-80Zm200-519q-25 0-41.5-17.5T380-659q2-25 18.5-42.5T440-719q25 0 41 17.5t19 42.5q-3 25-19 42.5T440-599Zm80 519q-51 0-85.5-34.5T400-200q0-48 33-82.5t81-36.5q16-36 49.5-58.5T637-400q47 0 85.5 26.5T773-300q45 0 76 32.5t31 77.5q0 45-28.5 77.5T780-80H520Zm0-80h250q12 0 21-8.5t9-21.5q0-12-9-21t-21-9h-57l-17-57q-5-20-21-31.5T639-320q-17 0-31.5 10T586-285l-20 45h-46q-17 0-28.5 11.5T480-200q0 17 11.5 28.5T520-160Zm120 0Z" />
                  </svg>
               </slot>
            </div>
         </div>
      </div>
      <div class="muk-metric-card__stats">
         <div class="muk-metric-card__stats--bagde">
            <muk-badge size="sm" variant="success">
               <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                     <path
                        d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
                  </svg>
               </template>
               <template #text>
                  3.48%
               </template>
            </muk-badge>
            <muk-badge size="sm" variant="danger">
               <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                     <path d="M640-240v-80h104L536-526 376-366 80-664l56-56 240 240 160-160 264 264v-104h80v240H640Z" />
                  </svg>
               </template>
               <template #text>
                  3.48%
               </template>
            </muk-badge>
            <muk-badge size="sm" variant="secondary">
               <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                     <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                  </svg>
               </template>
               <template #text>
                  3.48%
               </template>
            </muk-badge>
         </div>
         <div class="muk-metric-card__stats--info">
            <muk-text variant="muted" type="muk-caption">Since last month</muk-text>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { computed } from 'vue';

/* COMPONETS */
import MukBadge from './MukBadge.vue';
import MukText from '../typography/MukText.vue';

/* Props */
</script>
