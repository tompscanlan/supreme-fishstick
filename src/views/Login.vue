<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAuthStore } from '../stores/auth'
import Authentication from '../components/Authentication.vue'
</script>

<template>
  <Authentication />
</template>
