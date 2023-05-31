<script setup lang="ts">
import { useShortenedUrlsStore } from '../stores/shortened-urls'

// access the `shortUrls` variable anywhere in the component ✨
const shortUrls = useShortenedUrlsStore()
</script>

<template>
  <div>There are {{ shortUrls.count }} Urls in the database.</div>
  <form v-on:keyup.enter="shortenUrl">
    <input v-model.trim="shortUrl.destination" type="text" placeholder="Enter a URL to shorten" />
    <!-- prevent is important here to keep the page from reloading on click -->
    <button @click.prevent="shortenUrl">Shorter!</button>
  </form>
</template>

<script lang="ts">
import { API } from 'aws-amplify'
import { createShortUrls } from '../graphql/mutations'
import { ShortUrls } from '../models'
import { mapActions } from 'pinia'

export default {
  name: 'UrlRecordCreate',

  data() {
    return {
      shortUrl: {
        id: null,
        destination: null,
        shortened: null
      },
      errors: [] as Error[],
      records: [] as ShortUrls[]
    }
  },

  async created() {
    this.getCount()
  },

  methods: {
    ...mapActions(useShortenedUrlsStore, ['getCount']),
    // local function to wrap remote graphql call for storing the shortened url
    async shortenUrl() {
      const { destination } = this.shortUrl

      if (!destination) {
        this.errors.push(new Error('no url to shorten!'))
        return
      }

      const s = 'this should get calulated'
      const shortUrlRecord = {
        destination: destination,
        shortened: s,
        requests: 0
      }

      await API.graphql<any>({
        query: createShortUrls,
        variables: {
          input: shortUrlRecord
        }
      })
        .then((response) => {
          console.debug('then create shrturl response: ', response)
        })
        .catch((response) => {
          console.debug('catch create shrturl response: ', response)
          if (response.errors) {
            this.errors.push(response.errors)
            console.debug('errors in create: ', response.errors[0])
          }
        })
      // this.getShortUrls()
    }
  },

  computed: {
    console() {
      return console
    }
  }
}
</script>
