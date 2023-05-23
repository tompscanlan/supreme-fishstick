<template>
  <div>
    <h1>Shorten your url</h1>

    <div>There are {{ getAllRecords.length }} Urls in the database.</div>
    <form v-on:keyup.enter="shortenUrl">
      <input v-model.trim="shortUrl.destination" type="text" placeholder="Enter a URL to shorten" />
      <button @click.prevent="shortenUrl">Shorter!</button>
    </form>
  </div>
  <!-- 
  <div v-if="shortened && shortened.length > 0">
      <h3>
        Shortened:
      </h3>
      Count: {{ shortened }}
    </div> -->
  

  <ol v-if="getAllRecords">
    <li v-for="r in getAllRecords" :key="r.id">{{ r.id }} {{ r.shortened }} {{ r.destination }}</li>
  </ol>

  <div class="error" v-if="errors.length > 0">
    <h2>Errors</h2>
    <ol>
      <li v-for="e in errors" :key="e.message">
        {{ e }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { API } from 'aws-amplify'
import { createShortUrls } from '../graphql/mutations'
import { listShortUrls } from '../graphql/queries'
import { ShortUrls } from '@/models'

export default {
  name: 'App',

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
    this.getShortUrls()
  },

  methods: {
    // set property for this.shortened to be a list of items from graphql
    // handle errors that still have data
    async getShortUrls() {
      await API.graphql<any>({
        query: listShortUrls
      })
        .then((response) => {
          console.debug('then response getsrturl: ', response)
          this.records = response.data.listShortUrls.items
        })
        .catch((response) => {
          console.debug('catch response getsrturl: ', response)
          if (response.errors) {
            this.errors.push(response.errors)
            console.debug('errors: ', response.errors)
          }

          this.records = response.data.listShortUrls.items
          this.console.debug('shortened is now a ', typeof this.getAllRecords)
        })
    },

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
      this.getShortUrls()
    }
  },

  computed: {
    console() {
      return console
    },
    getAllRecords(): ShortUrls[] {
      // this.getShortUrls()
      return this.records
    }
  }
}
</script>
