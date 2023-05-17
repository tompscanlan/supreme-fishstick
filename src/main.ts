import { Amplify } from 'aws-amplify'
import awsconfig from '../src/aws-exports'
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
})

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
