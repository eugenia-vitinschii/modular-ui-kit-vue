<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Table Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="demo-controls muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Demo Controls</muk-text>
                  <muk-text>Variants</muk-text>
                  <div class="demo-controls--row">
                     <muk-radio v-for="variant in actionsLayoutOptions" :key="variant" v-model="selectedActionsLayout"
                        name="layout-variant" :value="variant" :label="variant" />
                  </div>
               </div>
               <div class="muk-section">
                  <demo-table :actions-type="selectedActionsLayout" />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

import DemoTable from '../components/DemoTable.vue';
import MukText from '@/components/ui/typography/MukText.vue';
import MukRadio from '@/components/ui/form/MukRadio.vue';

import type { ActionsLayoutType } from '../components/DemoTable.vue';
const selectedActionsLayout = ref<ActionsLayoutType>('column')

const actionsLayoutOptions: ActionsLayoutType[] = ['row', 'column']
</script>