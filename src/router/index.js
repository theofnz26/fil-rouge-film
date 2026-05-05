import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmsView from '../views/FilmsView.vue'
import FilmDetailView from '../views/FilmDetailView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: HomeView,
    },

    {
      path: '/films',
      component: FilmsView,
    },

    {
      path: '/films/:id',
      component: FilmDetailView,
    },
  ],
})

export default router