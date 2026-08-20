<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Comment Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="demo-controls muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Demo Controls</muk-text>
                  <muk-text>Actions</muk-text>
                  <div class="demo-controls--row">
                     <muk-radio value="full" v-model="actionsMode" name="comments-actions-demo" label="Full" />
                     <muk-radio value="likeOnly" v-model="actionsMode" name="comments-actions-demo" label="Like Only" />
                     <muk-radio value="none" v-model="actionsMode" name="comments-actions-demo" label="None" />
                  </div>
                  <muk-text>Avatar</muk-text>
                  <div class="demo-controls--row">
                     <muk-radio value="image" v-model="avatarType" name="comments-avatar-demo" label="Img" />
                     <muk-radio value="default" v-model="avatarType" name="comments-avatar-demo" label="Default" />
                     <muk-radio value="initials" v-model="avatarType" name="comments-avatar-demo" label="Initials" />
                  </div>
                  <muk-text>About</muk-text>
                  <div class="demo-controls--row">
                     <muk-checkbox v-model="showAbout" label="Show about" />
                  </div>
               </div>
               <div class="muk-comment-wrapper  muk-section">
                  <muk-comment-item name="Eugenia Vitinschii" created="5 minutes ago"
                     :about="showAbout ? 'frontend dev' : undefined" :authorProfile="'/'"
                     :avatar="avatarType === 'image' ? 'https://i.pravatar.cc/150?img=5' : undefined"
                     text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi consequatur. Voluptatibus, animi">
                     <template #avatar v-if="avatarType === 'initials'">
                        <muk-text type="muk-heading" variant="primary">EV</muk-text>
                     </template>
                     <!-- actions -->
                     <template #actions v-if="actionsMode !== 'none'">
                        <!-- actions  like -->
                        <muk-icon-button variant="ghost" size="sm" @click="toggleLike">
                           <svg v-if="isLiked" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                              fill="currentColor">
                              <path
                                 d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                           </svg>
                           <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                              <path
                                 d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                           </svg>
                           <template #text>{{ likesCount }}</template>
                        </muk-icon-button>
                        <!-- actions reply -->
                        <muk-icon-button v-if="actionsMode === 'full'" variant="ghost" size="sm">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                              <path
                                 d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
                           </svg>
                           <template #text>reply</template>
                        </muk-icon-button>
                     </template>
                  </muk-comment-item>
                  <muk-comment-form />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

/* COMPONENTS */
import MukRadio from '@/components/ui/form/MukRadio.vue';
import MukCheckbox from '@/components/ui/form/MukCheckbox.vue';
import MukIconButton from '@/components/ui/buttons/MukIconButton.vue';
import MukText from '@/components/ui/typography/MukText.vue';
import MukCommentForm from '@/components/ui/comments/MukCommentForm.vue';
import MukCommentItem from '@/components/ui/comments/MukCommentItem.vue';


const actionsMode = ref<'full' | 'likeOnly' | 'none'>('full');
const avatarType = ref<'image' | 'default' | 'initials'>('image');
const showAbout = ref(true);


const isLiked = ref(false);
const likesCount = ref(12);

const toggleLike = () => {
   isLiked.value = !isLiked.value;
   likesCount.value += isLiked.value ? 1 : -1;
};

</script>