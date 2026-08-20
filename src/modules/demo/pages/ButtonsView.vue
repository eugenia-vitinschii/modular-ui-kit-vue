<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Buttons Preview [Icon & Basic]</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="demo-controls muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Demo Controls</muk-text>
                  <muk-radio value="normal" v-model="buttonState" name="buttons-demo" label="Normal type" />
                  <muk-radio value="loading" v-model="buttonState" name="buttons-demo" label="Loading" />
                  <muk-radio value="disabled" v-model="buttonState" name="buttons-demo" label="Disabled" />
               </div>
               <div class="muk-section">
                  <muk-text :type="'muk-subheading'">Basic buttons</muk-text>
                  <div class="buttons-grid">
                     <div class="button-card" v-for="variant in variants" :key="variant">
                        <div class="button-card__header">
                           <muk-text>{{ variant }}</muk-text>
                        </div>
                        <div class="button-card__sizes">
                           <div class="button-card-row" v-for="size in sizes" :key="size">
                              <muk-text>{{ size }}</muk-text>
                              <muk-button :variant="variant" :size="size" :loading="buttonState === 'loading'"
                                 :disabled="buttonState === 'disabled'">
                                 {{ variant }}</muk-button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="muk-section">
                  <muk-text as="h3" :type="'muk-subheading'">Icon buttons</muk-text>
                  <div class="buttons-grid">
                     <div class="button-card" v-for="variant in variants" :key="variant">
                        <div class="button-card__header">
                           <muk-text>{{ variant }}</muk-text>
                        </div>
                        <div class="button-card__sizes">
                           <div class="button-card-row" v-for="size in sizes" :key="size">
                              <muk-icon-button :variant="variant" :size="size" :loading="buttonState === 'loading'"
                                 :disabled="buttonState === 'disabled'" aria-label="demo">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                    <path
                                       d="M160-240v-480 172-12 320Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v131q-18-13-38-22.5T800-548v-92H447l-80-80H160v480h283q3 21 9.5 41t15.5 39H160Zm400 0v-22q0-45 44-71.5T720-280q72 0 116 26.5t44 71.5v22H560Zm103.5-183.5Q640-367 640-400t23.5-56.5Q687-480 720-480t56.5 23.5Q800-433 800-400t-23.5 56.5Q753-320 720-320t-56.5-23.5Z" />
                                 </svg>
                              </muk-icon-button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="muk-section">
                  <muk-text as="h3" :type="'muk-subheading'">Icon buttons with text</muk-text>
                  <div class="buttons-grid">
                     <div class="button-card" v-for="variant in variants" :key="variant">
                        <div class="button-card__header">
                           <muk-text>{{ variant }}</muk-text>
                        </div>
                        <div class="button-card__sizes">
                           <div class="button-card-row" v-for="size in sizes" :key="size">
                              <muk-icon-button :variant="variant" :size="size" :loading="buttonState === 'loading'"
                                 :disabled="buttonState === 'disabled'" aria-label="demo" @click="isLiked = !isLiked">
                                 <Transition name="muk-pop" mode="out-in">
                                    <svg v-if="isLiked" key="filled" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 -960 960 960">
                                       <path
                                          d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                                    </svg>
                                    <svg v-else key="outlined" xmlns="http://www.w3.org/2000/svg" height="24px"
                                       viewBox="0 -960 960 960">
                                       <path
                                          d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                    </svg>
                                 </Transition>

                                 <template #text>{{ isLiked ? 44 : 43 }}</template>
                              </muk-icon-button>
                           </div>
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
/* VUE */
import { ref } from 'vue'

/* COMPONENTS */
import { MukButton, MukIconButton, MukRadio, MukText } from 'modular-ui-kit-vue'

/* TYPES */
import type { UIButtonVariant, UISize } from '@/types/ui.types';

/* BUTTONS */
/* state control */
type DemoState = 'normal' | 'loading' | 'disabled'
const buttonState = ref<DemoState>('normal')

/* variants */
const variants: UIButtonVariant[] = [
   'primary',
   'secondary',
   'success',
   'warning',
   'danger',
   'ghost'
]
/* sizes */
const sizes: UISize[] = ['sm', 'md', 'lg']
const isLiked = ref(false)
</script>

<style lang="sass">
.buttons-grid
   display: grid
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
   gap: 10px

.button-card
   padding: 16px

.button-card-row
   display: flex
   align-items: center
   justify-content: space-between
   overflow: scroll

</style>