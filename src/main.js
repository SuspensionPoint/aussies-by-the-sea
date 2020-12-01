import Vue from 'vue';
import VueConfetti from 'vue-confetti';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueConfetti);
Vue.use(require('moment'));

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
