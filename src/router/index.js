import { createWebHistory, createRouter } from 'vue-router'

import FormularioVue from '../components/FormularioVue.vue'
import Usuarios from '../components/Usuarios.vue'
import Home from '../components/Home.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/formulariovue', name: 'FormularioVue', component: FormularioVue},
    {path: '/usuarios', name: 'Usuarios', component: Usuarios}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router