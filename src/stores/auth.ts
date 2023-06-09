import { defineStore } from 'pinia'
import { Auth } from 'aws-amplify'
import { CognitoUser } from 'amazon-cognito-identity-js'

import { router } from '../router'
import { ref } from 'vue'

// const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore('auth', () => {
  const user = ref({} as CognitoUser)
})
// isLoggedIn: false as boolean,
// returnUrl: '' as string

// getters: {
//   isLoggedIn(state): boolean {
//     var user = state.getUserTimed()

//     return this.isLoggedIn
//   },
//   getSignOut(): Function {
//     if (this.isLoggedIn == true) {
//       return this.user.signOut
//     }
//     return function () {}
//   }
// },

// actions: {
//   getUsernameX(): string {
//     let name = ''
//     if (this.isLoggedIn) {
//       name = this.user.attributes['preferred_username'] || this.user.getUsername()
//     }
//     return name
//   },
//   async getUserTimed() {
//     var startTime = performance.now()
//     var user = await this.getUser()
//     var endTime = performance.now()
//     console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
//     return user
//   },
//   async getUser() {
//     Auth.currentAuthenticatedUser()
//       .then((user) => {
//         console.debug('then user: ', user)
//         this.user = user
//         this.isLoggedIn = true
//         return user
//       })
//       .catch((err) => {
//         console.error(err)
//         this.isLoggedIn = false
//         return {}
//       })
//   },
//   logout() {
//     router.push('/')
//   }
// }
// })
