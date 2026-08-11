<template>
   <div class="muk-badge" :class="[`muk-badge--${variant}`, `muk-badge--${size}`]">
      <div class="muk-badge__icon" v-if="$slots.icon || $slots.default">
         <slot name="icon"></slot>
      </div>
      <div class="muk-badge__text" v-if="text || $slots.text">
         <muk-text type='muk-none' :variant="variant">
            <slot name="text">{{ text }}</slot>
         </muk-text>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONNENTS */
import MukText from '../typography/MukText.vue'

/* TYPES */
import type { UITextVariant, UISize } from '@/types/ui.types'

/* PROPS */
interface Props {
   variant?: UITextVariant
   size?: UISize
   text?: string
}

withDefaults(defineProps<Props>(), {
   variant: "primary",
   size: "md",
})

</script>
