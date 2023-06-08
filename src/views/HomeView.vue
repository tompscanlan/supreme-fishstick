<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const { user, isLoggedIn } = storeToRefs(authStore)
</script>

<template>
  <div v-if="isLoggedIn == true">
    <h1>Hi {{ authStore.getUsernameX() }} !</h1>
    <p>You're logged in</p>
    <!-- <p><router-link to="/users">Manage Users</router-link></p> -->
  </div>
  <div v-else>
    <p>You're <b>not</b> logged in</p>
  </div>

  <main>Whee... This is an experiment.</main>
</template>
