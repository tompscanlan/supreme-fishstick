<script lang="ts">
import { type PropType } from 'vue'
import { ShortUrls } from '../models'

export default {
  props: {
    record: {
      type: Object as PropType<ShortUrls>,
      required: true
    }
  }
}
</script>

<template>
  <div class="shortUrlRecord">
    {{ record.id }} <a :href="record.destination">{{ record.shortened }}</a>
  </div>
</template>

<style scoped>
.shortUrlRecord {
  font-size: 0.5rem;
}
</style>
