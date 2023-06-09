<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/auth'
import { onMounted } from 'vue'

const authStore = useAuthStore()
const { user, isLoggedIn } = storeToRefs(authStore)

// onMounted(() => {
//   authStore.getUserTimed()
//   console.log('mounted...')
// })
</script>

<template>
  <div v-if="authStore.isLoggedIn === true">
    <h1>Hi {{ authStore.getUsernameX() }} !</h1>
    <p>You're logged in</p>
    <!-- <p><router-link to="/users">Manage Users</router-link></p> -->
  </div>
  <div v-else>
    <p>You're <b>not</b> logged in</p>
  </div>

  <main>Whee... This is an experiment.</main>
</template>
