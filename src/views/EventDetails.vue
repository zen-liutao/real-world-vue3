<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import { getEventById } from '@/services/EventService'
export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      event: null,
    }
  },
  async created() {
    const response = await getEventById(this.$route.params.id)
    this.event = response.data
  },
}
</script>
