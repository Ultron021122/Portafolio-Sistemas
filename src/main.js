import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Importar componentes para las rutas
import Home from './views/Home.vue'
import Activities from './views/Activities.vue'
import NotFound from './views/NotFound.vue'
import Develop from './views/Develop.vue'
import Conclusion from './views/Conclusion.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/activities', component: Activities },
  { path: '/developer', component: Develop },
  { path: '/activities/conclusion', component: Conclusion },
  { path: '/404', component: NotFound }, // Ruta para NotFound
  { path: '/:pathMatch(.*)', redirect: '/404' }, // Redirección a NotFound
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

