<template>
   <div ref="widgetRef" class="demo-widget">
      <muk-button @click="toggleMenu">Demo UI Kit</muk-button>
      <Transition name="fade">
         <div v-if="isOpen" class="demo-widget__menu" @mousedown.stop @touchstart.stop>
            <demo-navigation @close="isOpen = false" />
         </div>
      </Transition>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

/* COMPONENTS */
import MukButton from '@/lib/components/buttons/MukButton.vue';
import DemoNavigation from './DemoNavigation.vue';

/* STATE */
const isOpen = ref(false)

function toggleMenu() {
   isOpen.value = !isOpen.value
}

</script>

<style lang="sass">


</style>