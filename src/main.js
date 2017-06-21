// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router/index';
import store from './store/store';
import VueResource from 'vue-resource';
import App from './App';
Vue.use(VueResource);
Vue.config.productionTip = false;
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
