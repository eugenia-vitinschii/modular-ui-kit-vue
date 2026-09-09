<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Metric Cards Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="demo-controls muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Demo Controls</muk-text>
                  <muk-checkbox v-model="isLoading" label="Loading" />
                  <muk-checkbox v-model="isInverted" label="Invert" />
                  <muk-checkbox v-model="showStats" label="Show Stats" />
               </div>
               <div class="muk-section  muk-metric-card__wrapper">
                  <muk-metric-card :loading="isLoading" title="Total Revenue" value="$350,959"
                     :change="showStats ? 12.4 : null" :change-period="showStats ? 'Since last month' : ''"
                     :invert="isInverted"><template #icon><svg xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 -960 960 960">
                           <path
                              d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" />
                        </svg></template></muk-metric-card>
                  <muk-metric-card :loading="isLoading" title="Server Errors" value="23"
                     :change="showStats ? 3.45 : null" :change-period="showStats ? 'Since last hour' : ''"
                     :invert="isInverted"><template #icon><svg xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 -960 960 960">
                           <path
                              d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Zm216-60 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z" />
                        </svg></template></muk-metric-card>
                  <muk-metric-card :loading="isLoading" title="Active sessions" value="1,245"
                     :change="showStats ? 0 : null" :change-period="showStats ? 'vs previous period' : ''"
                     :invert="isInverted"><template #icon><svg xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 -960 960 960">
                           <path
                              d="M350-63q-46 0-82.5-24T211-153q-16 21-40.5 32.5T120-109q-51 0-85.5-35T0-229q0-43 28-77.5T99-346q-14-20-21.5-42.5T70-436q0-40 20.5-75t57.5-57q5 18 13.5 38.5T181-494q-14 11-22 26.5t-8 32.5q0 56 46 69t87 21l19 32q-11 32-19 54.5t-8 40.5q0 30 21.5 52.5T350-143q38 0 63-34t41-80q16-46 24.5-93t13.5-72l78 21q-9 45-22 103t-36.5 110.5Q488-135 449.5-99T350-63ZM120-189q17 0 28.5-11.5T160-229q0-17-11.5-28.5T120-269q-17 0-28.5 11.5T80-229q0 17 11.5 28.5T120-189Zm284-158q-46-41-83.5-76.5t-64.5-69q-27-33.5-41.5-67T200-629q0-65 44.5-109.5T354-783q4 0 7 .5t7 .5q-4-10-6-20t-2-21q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h14q60 0 102 38.5t50 95.5q-18-3-40.5-3t-41.5 2q-7-23-25.5-38T606-703q-35 0-54.5 20.5T498-623h-37q-35-41-54.5-60.5T354-703q-32 0-53 21t-21 53q0 23 13 47.5t36.5 52q23.5 27.5 57 58.5t74.5 67l-57 57Zm104.5-447.5Q520-806 520-823t-11.5-28.5Q497-863 480-863t-28.5 11.5Q440-840 440-823t11.5 28.5Q463-783 480-783t28.5-11.5ZM609-63q-22 0-43.5-6T524-88q11-14 22-33t20-35q11 7 22 10t22 3q32 0 53.5-22.5T685-219q0-19-8-41t-19-54l19-32q42-8 87.5-21t45.5-69q0-40-29.5-58T716-512q-42 0-98 16t-131 41l-21-78q78-25 139-42t112-17q69 0 121 41t52 115q0 25-7.5 47.5T861-346q43 5 71 39.5t28 77.5q0 50-34.5 85T840-109q-26 0-50.5-11.5T749-153q-20 42-56.5 66T609-63Zm260-137.5q11-11.5 11-28.5t-11.5-29Q857-270 840-270t-28.5 11.5Q800-247 800-230t12 29q12 12 29 12t28-11.5ZM120-229Zm360-594Zm360 593Z" />
                        </svg></template></muk-metric-card>
                  <muk-metric-card :loading="isLoading" title="Total customers" value="8,465"><template #icon><svg
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                           <path
                              d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                        </svg></template></muk-metric-card>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>


<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

/* Components */
import MukText from '@/components/ui/typography/MukText.vue';
import MukMetricCard from '@/components/ui/data-display/MukMetricCard.vue';
import MukCheckbox from '@/components/ui/form/MukCheckbox.vue';

//demo controls
const isLoading = ref(false)
const isInverted = ref(false)
const showStats = ref(true)

</script>
