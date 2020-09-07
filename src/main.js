import Vue from 'vue'
import App from './App.vue'
import 'leancloud-storage'
// const AV = require('leancloud-storage');
// import AV from 'leancloud-storage'
// Vue.use(AV)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
