import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

import { languages, defaultLocale } from './i18n/index.js';

const messages = Object.assign(languages)

Vue.config.productionTip = false
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: defaultLocale,
  messages
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
