import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Resume from './components/Resume.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: About },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/resume', component: Resume }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

