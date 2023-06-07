import { defineStore } from 'pinia'
import { API, Auth } from 'aws-amplify'
import { getCountShortUrls } from '../graphql/queries'

export const useShortenedUrlsStore = defineStore({
  id: 'shortened-urls', 
  state: () => {
    return {
      count: 0,
      user: {}
    }
  },

  getters: {
    getCountAllShortUrls: (state) => state.count,
    isLoggedIn: (state) => {
      return state.user && Object.keys(state.user).length > 0
    }
  },

  actions: {
    async getUser() {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          console.debug('then user: ', user)
          this.user = user
          return user
        })
        .catch((err) => {
          console.error(err)
          this.user={}
          return {}
        })
    },
    async getCount() {
      await API.graphql<any>({
        query: getCountShortUrls
      })
        .then((response) => {
          console.debug('then response: ', response)
          this.count = response.data.getCountShortUrls
        })
        .catch((response) => {
          console.error('catch response: ', response)
        })

      return this.count
    }
  }
})

export default useShortenedUrlsStore
