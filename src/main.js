import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: require('./components/Home.vue').default },
  { path: '/journal', name: 'journal', component: require('./components/Journal.vue').default },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
