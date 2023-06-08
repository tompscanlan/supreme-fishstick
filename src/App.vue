<script setup lang="ts">
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
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
