<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAuthStore } from '../stores/auth'
import Authentication from '../components/Authentication.vue'
</script>

<template>
  <h1>Login!</h1>
  <Authentication />
</template>
