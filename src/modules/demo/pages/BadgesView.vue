<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Badges Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Demo Controls</muk-text>
                  <div class="demo-controls--row">
                     <muk-radio v-for="variant in variantOptions" :key="variant" v-model="selectedVariant"
                        name="text-variant" :value="variant" :label="variant"></muk-radio>
                  </div>
               </div>
               <div class="muk-section">
                  <muk-text :type="'muk-subheading'">Badges</muk-text>
                  <div class="badges-wrapper">
                     <div class="bage__item">
                        <div class="badge" v-for="size in sizes" :key="size">
                           <muk-badge :variant="selectedVariant" :size="size" :text="'Tag: Frontend'">
                              <template #icon>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                    <path
                                       d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
                                 </svg>
                              </template>
                           </muk-badge>
                        </div>
                     </div>
                     <div class="bage__item">
                        <div class="badge" v-for="size in sizes" :key="size">
                           <muk-badge :variant="selectedVariant" :size="size" :text="'New Release'">
                              <template #icon>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                    <path
                                       d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm28.5 188.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Z" />
                                 </svg>
                              </template>
                           </muk-badge>
                        </div>
                     </div>
                     <div class="badge__item">
                        <div class="badge" v-for="size in sizes" :key="size">
                           <muk-badge :variant="selectedVariant" :size="size">
                              <template #icon>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                    <path
                                       d="M289-329q-29-29-29-71t29-71q29-29 71-29t71 29q29 29 29 71t-29 71q-29 29-71 29t-71-29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                                 </svg>
                              </template>
                              <template #text>
                                 Published <strong>2 days ago</strong>
                              </template>
                           </muk-badge>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* Components */
import MukText from '@/components/ui/typography/MukText.vue';
import MukRadio from '@/components/ui/form/MukRadio.vue';
import MukBadge from '@/components/ui/data-display/MukBadge.vue';

import { ref } from 'vue';
/* Types */
import type { UITextVariant, UISize } from '@/types/ui.types';

/* Options */
const variantOptions: UITextVariant[] = [
   'primary',
   'secondary',
   'success',
   'warning',
   'danger',
   'muted'
]
/* sizes */
const sizes: UISize[] = ['sm', 'md', 'lg']

const selectedVariant = ref<UITextVariant>('secondary')
</script>

<style lang="sass">
.demo-controls--row
   display: flex
   align-items: center
   justify-content: start
   flex-direction: row
   flex-wrap: wrap

.badges-wrapper
   display: flex
   justify-content: space-between
   flex-wrap: wrap

</style>