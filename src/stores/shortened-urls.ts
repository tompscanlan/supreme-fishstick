import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from 'aws-amplify'
import {getCountShortUrls} from '../graphql/queries'

export const useShortenedUrlsStore = defineStore('shortened-urls', {
  state: () => {
    return { count: 5 }
  },
  getters: {
    getCountAllShortUrls: (state) => this == null ? 0: this.getCount()
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
          console.debug('catch response getsrturl: ', response)
    //       if (response.errors) {
    //         this.errors.push(response.errors)
    //         console.debug('errors: ', response.errors)
    //       }

    //       this.records = response.data.listShortUrls.items
    //       this.console.debug('shortened is now a ', typeof this.getAllRecords)
        })
      }
    // }
  }
}
)

export default useShortenedUrlsStore
