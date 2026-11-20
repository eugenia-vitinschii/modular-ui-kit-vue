<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper  error-page-wrapper">
            <muk-text :type="'muk-heading'" as="h1">Build Clean Vue 3 Interfaces Faster</muk-text>
            <muk-text>A lightweight, accessible component library built with TypeScript and atomic SASS architecture.
               Styled via CSS Design Tokens for effortless theming and zero-config integration.</muk-text>
            <div class="badges-wrapper">
               <muk-badge size="sm">
                  <template #icon>
                     <muk-text as="a" href="https://www.npmjs.com/package/modular-ui-kit-vue" target="_blank"
                        rel="noopener noreferrer">
                        <img src="https://img.shields.io/npm/v/modular-ui-kit-vue?color=42b883" alt="NPM Version" />
                     </muk-text>
                  </template>
               </muk-badge>
               <muk-badge size="sm">
                  <template #icon>
                     <muk-text as="a" href="https://www.npmjs.com/package/modular-ui-kit-vue" target="_blank"
                        rel="noopener noreferrer">
                        <img src="https://img.shields.io/npm/dm/modular-ui-kit-vue?color=35495e" alt="NPM Downloads" />
                     </muk-text>
                  </template>
               </muk-badge>
               <muk-badge size="sm">
                  <template #icon>
                     <muk-text as="a" href="https://github.com/MShawon/github-clone-count-badge" target="_blank"
                        rel="noopener noreferrer">
                        <img
                           src="https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/2e6247835bbf3928be881ca260cad051/raw/clone.json&logo=github"
                           alt="GitHub Clones" />
                     </muk-text>
                  </template>
               </muk-badge>
            </div>
            <ul>
               <li>
                  <muk-text>➔ Design Tokens & Theming</muk-text>
                  <muk-text>Customize the entire look and feel in seconds. Powered by native :root CSS variables for
                     instant dark/light mode switching and brand alignment without overriding styles.</muk-text>
               </li>
               <li>
                  <muk-text>➔ Modular Architecture</muk-text>
                  <muk-text>Tree-shakeable and lightweight. Import only the components you need—from form controls and
                     feedback states to interactive Chart.js dashboards.</muk-text>
               </li>
               <li>
                  <muk-text>➔ Developer Experience</muk-text>
                  <muk-text>Zero-config setup with predictable APIs, clean atomic SASS structure, and built-in UX states
                     (loading, empty, and error handling) ready for production</muk-text>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import MukText from '@/lib/components/typography/MukText.vue';
import MukBadge from '@/lib/components/data-display/MukBadge.vue';
</script>
