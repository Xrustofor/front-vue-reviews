import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/1/profile' },
  { path: '/:profileId', redirect: '/1/profile' },
  {
    path: '/:profileId/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
