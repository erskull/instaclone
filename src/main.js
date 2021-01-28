import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import masonry from './plugins/masonry'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  masonry,
  render: h => h(App)
}).$mount('#app')
