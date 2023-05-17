<template>
  <div>
    <h1>Shorten your url</h1>

    <span>URL</span>
    <input v-model.trim="destination" type="text" placeholder="Enter a URL to shorten" />
    <span>URL is "{{ destination }}"</span>
    <button v-on:click="shortenUrl">Shorter!</button>
  </div>
  <!-- 
  <div v-if="shortened && shortened.length > 0">
      <h3>
        Shortened:
      </h3>
      Count: {{ shortened }}
    </div> -->

  <ol v-if="records">
    <li v-for="r in records" :key="r">
      {{ r.destination }} -> {{ r.shortened }}
    </li>
  </ol>

  <div class="error" v-if="errors.length > 0">
    <h2>Errors</h2>
    <ol>
      <li v-for="e in errors" :key="e">
        {{ e }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { API } from 'aws-amplify'
import { createShortUrls } from '../graphql/mutations'
import { listShortUrls } from '../graphql/queries'

export default {
  name: 'App',

  data() {
    return {
      destination: '',
      errors: [],
      shortened: []
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
          this.shortened = response.data.listShortUrls.items
        })
        .catch((response) => {
          console.debug('catch response getsrturl: ', response)
          if (response.errors) {
            this.errors.push(response.errors as never)
          }

          this.shortened = response.data.listShortUrls.items
          this.console.debug('shortened is now a ', typeof this.shortened)
        })
      return this.shortened
    },

    // local function to wrap remote graphql call for storing the shortened url
    async shortenUrl() {
      console.debug('in shortenUrl()')
      const { destination } = this

      if (!destination) {
        this.errors.push('no url to shorten!' as never)
        return
      }

      const shortUrl = 'this should get calulated'
      const shortUrlRecord = {
        destination: destination,
        shortened: shortUrl,
        requests: 0
      }

      // try {
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
        })
    }
  },

  computed: {
    console() {
      return console
    },
    records(): any {
      return this.shortened
    }
  }
}
</script>
