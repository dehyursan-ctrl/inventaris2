import overview from './pages/overview.vue'
import toevoegen from './pages/toevoegen.vue'
import bewerken from './pages/bewerken.vue'
import bestellingen from './pages/bestellen.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        name: 'Overview',
        path: '/overview',
        component: overview
    },
    {
        name: 'toevoegen',
        path: '/toevoegen',
        component: toevoegen

    },
    {
        path: '/',
        redirect: '/overview',
    },
    {
        name: 'bewerken',
        path: '/bewerken/:id',
        component: bewerken
    },
    {
        name: 'bestellen',
        path: '/bestellen',
        component: bestellingen
    }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router