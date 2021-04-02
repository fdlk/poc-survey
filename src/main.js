import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import {Survey} from 'survey-vue'

Vue.config.productionTip = false
Survey.cssType = 'bootstrap'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
