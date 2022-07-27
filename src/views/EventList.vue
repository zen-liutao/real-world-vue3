<template>
  <div class="home">
    <div class="events">
      <EventCard :event="event" v-for="event in events" :key="event.id" />
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { getEvents } from '@/services/EventService'
export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    }
  },
  async created() {
    console.log(getEvents)
    const response = await getEvents()
    this.events = response.data
    console.log(response)
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

:deep(a) {
  color: #42b983;
  text-decoration: none;
}
</style>
