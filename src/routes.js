import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@/components/TrackDetail.vue'

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/track/:id', component: TrackDetail, name: 'track' },
  { path: '/about', component: About, name: 'about' }
]

export default routes
