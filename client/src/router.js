import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Results from './views/Results.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: `/`,
  routes: [
    {
      path: '/',
      name: 'Practice Sheets',
      component: Home
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    }
  ]
})
