// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lazyLoad from 'vue-lazyload'

Vue.config.productionTip = false;

Vue.use(lazyLoad,{
  loading:'/static/loading-svg/loading-balls.svg'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

