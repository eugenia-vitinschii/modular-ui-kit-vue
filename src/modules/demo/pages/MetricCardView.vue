<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Metric Cards Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="muk-section">
                  <muk-text> Demo controls</muk-text>
               </div>
               <div class="muk-section">
                  <muk-metric-card></muk-metric-card>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>


<script setup lang="ts">
/* Components */
import MukText from '@/components/ui/typography/MukText.vue';
import MukMetricCard from '@/components/ui/data-display/MukMetricCard.vue';


</script>
