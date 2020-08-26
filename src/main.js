import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './assets/styles/style.sass'

Vue.use(Vuelidate)


new Vue({
  render: h => h(App),
}).$mount('#app')
