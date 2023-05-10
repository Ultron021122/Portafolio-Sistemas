import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Importar componentes para las rutas
import Home from './views/Home.vue'
import Activities from './views/Activities.vue'
import NotFound from './views/NotFound.vue'
import Develop from './views/Develop.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/activities', component: Activities },
  { path: '/developer', component: Develop },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

