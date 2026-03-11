import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import TarefaPage from '../views/TarefaPage.vue';
import RemoverPage from '../views/RemoverPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/tarefa',
    name: 'Tarefa',
    component: TarefaPage
  },
  {
    path: '/remover',
    name: 'Remover',
    component: RemoverPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
