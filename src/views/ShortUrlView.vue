<script setup lang="ts">
import UrlRecordCreate from '../components/UrlRecordCreate.vue'
</script>
<template>
  <div>
    <h1>Shorten your url</h1>

    <UrlRecordCreate />
  </div>
  <!-- 
  <div class="allRecords">
    <h1>All Records:</h1>
    <ul>
      <li v-for="r in getAllRecords" :key="r.id">
        <ShortUrlRecord :record="r" />
      </li>
    </ul>
  </div> -->

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
  components: { UrlRecordCreate },

  methods: {},

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
