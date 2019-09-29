// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueIclient from '@supermap/vue-iclient'
import Antd from 'ant-design-vue';

Vue.config.productionTip = false
Vue.use(VueIclient)
Vue.use(Antd)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
