<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="nav-wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/short">Short Urls</RouterLink>
        <!-- <RouterLink to="/login">Login</RouterLink> -->
      </nav>
    </div>

    <div class="authenticator">
      <authenticator>
        <template v-slot="{ user, signOut }">
          <h1>Hello {{ user.username }}!</h1>
          <button @click="signOut">Sign Out</button>
        </template>
      </authenticator>
    </div>
  </header>

  <RouterView />
</template>
