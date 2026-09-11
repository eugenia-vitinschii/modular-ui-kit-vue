<template>
   <div class="muk-error-state" :style="computedStyle">
      <div class="muk-error-state__text">
         <muk-text type="muk-subheading" as="h3" :align="'center'" variant="danger">{{ title }}</muk-text>
         <muk-text :align="'center'">{{ description }}</muk-text>
      </div>
      <div class="muk-error-state__action">
         <slot name="action"></slot>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { computed } from 'vue';

/* COMPONENTS */
import MukText from '../typography/MukText.vue';

/* UTILS */
import { formatSize } from '@/utils/formatSize.ts';

/* PROPS */
const props = withDefaults(
   defineProps<{
      title?: string
      description?: string
      width?: string | number
      height?: string | number
   }>(),
   {
      title: "Oops! Something went wrong",
      description: 'Failed to fetch data. Please try again.',
   }
)


//height/width 
const computedStyle = computed(() => {
   return {
      width: formatSize(props.width),
      height: formatSize(props.height)
   }
})
</script>
