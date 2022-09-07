import { createApp } from 'vue'
import './style.css'
import router from './router/index'
import App from './App.vue'
import {createPinia} from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'amfe-flexible'

// import "vant/lib/index.css"

// import { Tab, Tabs } from 'vant';

// Vant 桌面端适配
// import '@vant/touch-emulator'
createApp(App).use(router).use(createPinia).use(Antd).mount('#app')
