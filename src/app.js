import Vue from 'vue';
import './assets/scss/style.scss';

import router from './router';
import App from './App.vue';
import store from './store';
import * as types from './store/mutation-types';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created() {
    this.$store.commit(types.RESET_LOADING_PROGRESS);
    this.$store.dispatch('getAllCategories');
    this.$store.dispatch('getAllPages');
  },
});
