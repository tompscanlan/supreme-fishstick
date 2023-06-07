<script setup lang="ts">
import { mapActions } from 'pinia'
import { useShortenedUrlsStore } from '../stores/shortened-urls'

const shortUrls = useShortenedUrlsStore()
</script>

<template>
  <div class="border">
    Short url {{ url }} redirects to
    <component :is="'a'" :to="destination" :href="destination">{{ destination }}</component>
  </div>
</template>

<script lang="ts">
export default {
  name: 'resolve-url',

  data() {
    return {
      url: 'http://google.com/someurl'
    }
  },
  computed: {
    destination() {
      return this.resolve(this.url)
    }
  },
  methods: {
    ...mapActions(useShortenedUrlsStore, ['getCount']),
    resolve(url: string) {
      const shorturl = 'lookedup'
      return `http://toot.ninja/${shorturl}`
    }
  }
}
</script>

<style scoped>
.border {
  border-style: dotted;
}
</style>
