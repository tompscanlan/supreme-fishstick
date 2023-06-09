<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
// const { user, isLoggedIn } = storeToRefs(authStore)
</script>

<template>
  <RouterLink v-if="authStore.isLoggedIn === false" to="/login">Login</RouterLink>
  <a href="" v-else="authStore.getSignOut">Log Out</a>
</template>
