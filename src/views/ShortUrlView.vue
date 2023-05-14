<template>
    <div>
<h1>Shorten your url</h1>

<span>URL</span>
      <input v-model.trim="originalUrl" type="text" placeholder="Enter a URL to shorten">
      <span>URL is "{{ originalUrl }}"</span>
        <button v-on:click="shortenUrl">Shorter!</button>


    </div>
</template>

<script lang="ts">

import { API } from 'aws-amplify';
import { createShortUrls } from './graphql/mutations'
import { listShortUrls } from './graphql/queries'

export default {
  name: 'App',

  data() {
    return {
      originalUrl: "",
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
      await API.graphql({
        query: listShortUrls,

      }).then(response => {
        console.debug("then response getsrturl: ", response)
        this.shortened = response.data.listShortUrls.items

      }).catch(response => {
        console.debug("catch response getsrturl: ", response)
        if (response.errors) {
          this.errors.push(response.errors)
        }
        this.shortened = response.data.listShortUrls.items
        this.console.debug("shortened is now a ", typeof this.shortened)

        console.debug(this.$data)
        console.debug(this.shortened)
      })
      return this.shortened;
    },

    // local function to wrap remote graphql call for storing the shortened url
    async shortenUrl() {
      console.debug("in shortenUrl()")
      const { originalUrl } = this;

      if (!originalUrl) {
        this.errors.push("no url to shorten!");
        return
      }

      const shortUrl = 'this should get calulated'
      const shortUrlRecord = {
        originalUrl: originalUrl,
        shortUrl: shortUrl,
        clicks: 0,
        lastClickDate: "??",
        createdOnDate: "??"
      }

      // try {
      await API.graphql({
        query: createShortUrls,
        variables: {
          input: shortUrlRecord
        }
      }).then(response => {
        console.debug("then create shrturl response: ", response)

      }).catch(response => {
        console.debug("catch create shrturl response: ", response)

      })
    }
  },

  computed: {
    console() { return console },
    count() {

      return typeof this.shortened

    },
    checkOnShoshortsIsOk(){
return false;
    }

  }
};



</script>