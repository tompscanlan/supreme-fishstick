// import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from 'aws-amplify'
import { getCountShortUrls } from '../graphql/queries'

export const useShortenedUrlsStore = defineStore('shortened-urls', {
  state: () => {
    return { count: 5 }
  },

  getters: {
    getCountAllShortUrls: (state) => state.count
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
          console.debug('catch response: ', response)
        })

        return this.count
    }
  }
})

export default useShortenedUrlsStore
