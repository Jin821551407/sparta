import Vue from 'vue'
import App from './App.vue'
import '@/config/rem/rem'

import { Swipe,SwipeItem,Popup } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Popup);

new Vue({
  render: h => h(App),
}).$mount('#app')
