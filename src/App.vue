<template>
  <Transition name="fade" mode="out-in">
    <div class="muk-wrapper" v-if="route.meta.layout === 'error' || route.meta.layout === 'login'">
      <div class="muk-content">
        <router-view />
      </div>
    </div>
    <div class="muk-wrapper" v-else>
      <app-header />
      <div class="muk-content">
        <muk-breadcrumbs />
        <router-view />
        <demo-widget />
        <muk-toast-container />
      </div>
      <app-footer />
    </div>
  </Transition>
</template>

<script setup lang="ts">
/* ROUTER */
import { useRoute } from 'vue-router';

/* === COMPONENTS === */
import AppHeader from './demo/components/AppHeader.vue';
import AppFooter from './demo/components/AppFooter.vue';
import MukBreadcrumbs from './lib/components/navigation/MukBreadcrumbs.vue';
import MukToastContainer from './lib/components/feedback/MukToastContainer.vue';

/* === DEMO === */
import DemoWidget from './demo/components/DemoWidget.vue';

const route = useRoute()
</script>
