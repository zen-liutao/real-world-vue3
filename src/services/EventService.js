import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// export const EventService = {
//   getEvents() {
//     return apiClient.get('/events')
//   },
// }
export function getEvents() {
  return apiClient.get('/events')
}

export function getEventById(id) {
  return apiClient.get(`/events/${id}`)
}
