<template>
   <div class="muk-table-wrapper muk-section__item">
      <table class="muk-table">
         <thead>
            <tr>
               <th>Name</th>
               <th>Role</th>
               <th>Position</th>
               <th>Location</th>
               <th>Actions</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="user in users" :key="user.id">
               <td>
                  <div class="user-info">
                     <muk-text as="span">{{ user.name }}: </muk-text>
                     <muk-text as="span">{{ user.email }}</muk-text>
                  </div>
               </td>
               <td>
                  <muk-badge :text="user.role" :variant="user.role === 'Admin' ? 'primary' : 'secondary'" size="sm">
                     <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                           <path
                              d="M707-707q93 93 93 227t-93 227q-93 93-227 93t-227-93q-93-93-93-227t93-227q93-93 227-93t227 93Zm-57 397q70-70 70-170t-70-170q-70-70-170-70t-170 70q-70 70-70 170t70 170q70 70 170 70t170-70Zm-84-57.5q38-27.5 54-72.5H340q16 45 54 72.5t86 27.5q48 0 86-27.5Zm-214.5-164Q363-520 380-520t28.5-11.5Q420-543 420-560t-11.5-28.5Q397-600 380-600t-28.5 11.5Q340-577 340-560t11.5 28.5Zm200 0Q563-520 580-520t28.5-11.5Q620-543 620-560t-11.5-28.5Q597-600 580-600t-28.5 11.5Q540-577 540-560t11.5 28.5ZM40-720v-120q0-33 23.5-56.5T120-920h120v80H120v120H40ZM240-40H120q-33 0-56.5-23.5T40-120v-120h80v120h120v80Zm480 0v-80h120v-120h80v120q0 33-23.5 56.5T840-40H720Zm120-680v-120H720v-80h120q33 0 56.5 23.5T920-840v120h-80ZM480-480Z" />
                        </svg>
                     </template>
                  </muk-badge>
               </td>
               <td>{{ user.position }}</td>
               <td>{{ user.location }}</td>
               <td>
                  <div class="muk-table__actions" :class="[`muk-table__actions--${actionsType}`]">
                     <muk-button size="sm" variant="primary" @click="handleEdit(user.id)">
                        Edit
                     </muk-button>
                     <muk-button size="sm" variant="secondary" @click="handlePreview(user.id)">
                        View
                     </muk-button>
                     <muk-button size="sm" variant="danger" @click="handleDelete(user.id)">
                        Delete
                     </muk-button>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* COMPONENTS */
import { MukBadge, MukText, MukButton } from 'modular-ui-kit-vue'

export type ActionsLayoutType = 'column' | 'row'

withDefaults(
   defineProps<{
      actionsType?: ActionsLayoutType
   }>(),
   {
      actionsType: 'column'
   }
)

//Local type
interface DemoUser {
   id: string
   name: string
   email: string
   role: string
   position: string
   location: string
}

// LOCAL DATA
const users = ref<DemoUser[]>([
   {
      id: '1',
      name: 'Alex Morgan',
      email: 'alex@company.com',
      role: 'Admin',
      position: 'Lead Developer',
      location: 'Berlin, DE'
   },
   {
      id: '2',
      name: 'Sarah Connor',
      email: 'sarah@company.com',
      role: 'Member',
      position: 'UX Designer',
      location: 'London, UK'
   },
   {
      id: '3',
      name: 'Michael Scott',
      email: 'michael@company.com',
      role: 'Member',
      position: 'Product Manager',
      location: 'Scranton, US'
   }
])

/* DEMO HANDLERS */
const handleEdit = (id: string) => {
   console.log('Edit user:', id)
}

const handlePreview = (id: string) => {
   console.log('Preview user:', id)
}

const handleDelete = (id: string) => {
   users.value = users.value.filter(u => u.id !== id)
}
</script>