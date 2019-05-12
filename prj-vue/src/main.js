import Vue from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import './registerServiceWorker'

// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import { Layout, Modal, Card } from 'bootstrap-vue/es/components'
Vue.use(Layout)

// This imports <b-modal> as well as the v-b-modal directive as a plugin:
Vue.use(Modal)

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
Vue.use(Card)

// This imports directive v-b-scrollspy as a plugin:
// import { Scrollspy } from 'bootstrap-vue/es/directives';
// Vue.use(Scrollspy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
