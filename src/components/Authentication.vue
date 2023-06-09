<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue'

import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
authStore.user.signOut
</script>

<template>
  <div class="authenticator">
    <authenticator>
      <template v-slot="{ user, signOut }">
        <h1>Hello {{ user.username }}!</h1>
        <button @click="signOut">Sign Out</button>
      </template>
    </authenticator>
  </div>
</template>
