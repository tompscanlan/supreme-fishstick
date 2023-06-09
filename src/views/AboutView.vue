<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { onMounted } from 'vue'
import { Hub } from 'aws-amplify'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const { user, isLoggedIn } = storeToRefs(authStore)

Hub.listen(/.*/, (data) => {
  console.log('Listening for all messages: ', data.payload.data)
})

Hub.listen('auth', (data) => {
  const { payload } = data
  console.log(
    'A new auth event has happened: ',
    data.payload.data.username + ' has ' + data.payload.event
  )
})

onMounted(() => {
  authStore.getUserTimed()
  console.log('mounted...')
})
</script>

<template>
  <div class="about">
    <h1>This is an about page, bro</h1>
    <div style="border: dotted" v-if="isLoggedIn">
      You are logged in!
      <pre
        >{{ authStore }}
      </pre>
    </div>
    <div>User is {{ user }}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
