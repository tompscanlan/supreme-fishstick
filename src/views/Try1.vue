<template>
  <div id="app">
    <div v-if="!signedIn">
      <amplify-authenticator></amplify-authenticator>
    </div>
    <div v-if="signedIn">
      <amplify-sign-out class="signout" v-bind:signOutOptions="signOutOptions"></amplify-sign-out>
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <!-- <button v-on:click="signOut">Sign Out</button> -->
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { AmplifyEventBus, components } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'

import * as AmplifyVue from 'aws-amplify-vue'

const signOutOptions = {
  msg: 'You are currently signed in.', // type: string, default: null
  signOutButton: 'Sign Out' // type: string, default: 'Sign Out', required: false
}

export default {
  name: 'app',
  components: {
    components,
    HelloWorld
  },
  async beforeCreate() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.signedIn = true
    } catch (err) {
      this.signedIn = false
    }
    AmplifyEventBus.$on('authState', (info) => {
      if (info === 'signedIn') {
        this.signedIn = true
      } else {
        this.signedIn = false
      }
    })
  },
  // methods: {
  //   signOut: async function () {
  //     await Auth.signOut()
  //     this.signedIn = false
  //     console.log('signed out!')
  //   }
  // },
  data() {
    return {
      signOutOptions,
      signedIn: false
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.signout {
  background-color: #ededed;
  margin: 0;
  padding: 11px 0px 1px;
}
</style>
