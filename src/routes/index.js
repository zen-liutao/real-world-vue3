import EventList from '@/views/EventList.vue'
import About from '@/views/About.vue'
import EventDetails from '@/views/EventDetails'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'EventList', component: EventList },
  { path: '/about', name: 'About', component: About },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetails,
    props: true,
  },
]

const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(process.env.BASE_URL),
  routes, // short for `routes: routes`
})
export default router
