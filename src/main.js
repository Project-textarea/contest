import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import router from './router'
const vue = createApp(App)

// import {hideAddress} from './assets/js/filters'
// vue.use(hideAddress)
import mitt from "mitt"
vue.config.globalProperties.$eventBus = new mitt()
vue.use(router)
vue.use(store)
vue.mount('#app')

