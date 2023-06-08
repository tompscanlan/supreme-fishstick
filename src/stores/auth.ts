import { defineStore } from 'pinia'
import { Auth } from 'aws-amplify'
import { CognitoUser } from 'amazon-cognito-identity-js'

import { router } from '../router'

// const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: {} as CognitoUser,
    isLoggedIn: false as boolean,
    returnUrl: '' as string
  }),
  actions: {
    getUsernameX(): string {
      let name = ''
      if (this.isLoggedIn) {
                name = this.user.attributes['preferred_username'] || this.user.getUsername()
      }
      return name
    },
    async getUser() {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          console.debug('then user: ', user)
          this.user = user
          this.isLoggedIn = true
          return user
        })
        .catch((err) => {
          console.error(err)
          this.isLoggedIn = false
          return {}
        })
    },
    logout() {
      router.push('/')
    }
  }
})
