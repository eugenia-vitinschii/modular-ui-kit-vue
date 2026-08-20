<template>
   <form class="muk-comment-form muk-section__item" @submit.prevent="handletSubmit">
      <div class="muk-comment-form__avatar">
         <slot name="avatar">
            <img :src="avatar" v-if="avatar">
            <svg v-else class="muk-comment-avatar-placeholder" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 -960 960 960">
               <path
                  d="M324.5-404.5Q310-419 310-440t14.5-35.5Q339-490 360-490t35.5 14.5Q410-461 410-440t-14.5 35.5Q381-390 360-390t-35.5-14.5Zm240 0Q550-419 550-440t14.5-35.5Q579-490 600-490t35.5 14.5Q650-461 650-440t-14.5 35.5Q621-390 600-390t-35.5-14.5ZM480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5ZM177-581q51-29 89-75t57-103q-51 29-89 75t-57 103Zm249-214Zm-103 36Z" />
            </svg>
         </slot>
      </div>
      <div class="muk-comment-form__content">
         <div class="muk-comment-form__content--field">
            <muk-textarea v-model="content" :placeholder="placeholder" :disabled="disabled || loading"
               @keydown.ctrl.enter="handletSubmit" @keydown.meta.enter="handletSubmit" width="100%" />
         </div>
         <muk-icon-button size="sm" type="submit" :disabled="!isValid || disabled || loading" :loading="loading">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
            </svg>
         </muk-icon-button>
      </div>
   </form>
</template>

<script setup lang="ts">
/* VUE */
import { ref, computed } from 'vue';

/* COMPONENTS */
import MukTextarea from '../form/MukTextarea.vue';
import MukIconButton from '../buttons/MukIconButton.vue';

/* PROPS  & EMITS*/
interface Props {
   avatar?: string,
   placeholder?: string
   disabled?: boolean
   loading?: boolean
   resetOnSubmit?: boolean
}

const props = withDefaults(defineProps<Props>(), ({
   placeholder: 'Type ...',
   disabled: false,
   loading: false,
   resentOnSubmit: true
}))

/* EMIT */
const emit = defineEmits<{
   (e: "submit", value: string): void
}>()

/* LOCAL STATE */
const content = ref('')
const isValid = computed(() => content.value.trim().length > 0)

/* submit */
function handletSubmit() {
   if (!isValid.value || props.disabled || props.loading) return

   const textToSend = content.value.trim()
   emit('submit', textToSend)

   if (props.resetOnSubmit) {
      content.value = ''
   }
}
</script>
