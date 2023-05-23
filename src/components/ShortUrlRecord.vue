<script lang="ts">
import { PropType } from 'vue';
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
        <h1 class="green">{{ record.id }}</h1>
        <a :href=record.destination>{{record.shortened}}</a>
    </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1rem;
  top: -10px;
}

h3 {
  font-size: .8rem;
}

.shortUrlRecord h1,
.shortUrlRecord h3 {
  text-align: center;
}
</style>