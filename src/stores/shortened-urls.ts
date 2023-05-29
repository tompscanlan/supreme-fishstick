import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShortenedUrlsStore = defineStore('shortened-urls', {
  state: () => {
    return { count: 5 }
  },
  getters: {},
  actions: {}
})

export default useShortenedUrlsStore
