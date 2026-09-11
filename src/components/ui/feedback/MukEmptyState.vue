<template>
   <div class="muk-empty-state" :class="`muk-empty-state--${variant}`" :style="computedStyle">
      <div class="muk-empty-state__text">
         <muk-text type="muk-subheading" as="h3">{{ title }}</muk-text>
         <muk-text type="muk-body-text">{{ description }}</muk-text>
      </div>
      <div v-if="$slots.action" class="muk-empty-state__actions">
         <slot name="action"></slot>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { computed } from 'vue';

/* COMPONENTS */
import MukText from '../typography/MukText.vue';

/* VARIANTS */
import type { UIEmptyStateVariant } from '@/types/ui.types'

/* UTILS */
import { formatSize } from '@/utils/formatSize.ts';

/* PROPS */
const props = withDefaults(
   defineProps<{
      title?: string
      description?: string
      variant?: UIEmptyStateVariant
      width?: string | number
      height?: string | number
   }>(),
   {
      variant: 'secondary',
      title: "No data available",
      description: 'There is nothing to display here at the moment. Please try refreshing the page',
   }
)

defineSlots<{
   action?: (props: {}) => any
}>()

//height/width 
const computedStyle = computed(() => {
   return {
      width: formatSize(props.width),
      height: formatSize(props.height)
   }
})
</script>
