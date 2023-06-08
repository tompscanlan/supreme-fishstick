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
    isisLoggedIn: (state) => {
      return state.user && Object.keys(state.user).length > 0
    }
  },

  actions: {
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
