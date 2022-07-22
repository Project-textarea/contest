import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import router from './router'
const vue = createApp(App)

// import {hideAddress} from './assets/js/filters'
// vue.use(hideAddress)
import mitt from "mitt"
vue.config.globalProperties.$eventBus = new mitt()
import axios from "./assets/js/axios";
vue.config.globalProperties.$h = axios;
import $ from 'jquery'
import '@/assets/js/jquery.datetimepicker.js'
import Notifications from '@kyvg/vue3-notification'
import loadingBar from './components/loading/index'
vue.component("loadingBar",loadingBar);
vue.use(Notifications)
vue.use(router)
vue.use(store)
vue.mount('#app')

