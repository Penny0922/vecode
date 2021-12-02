import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios';
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

axios.defaults.baseURL = 'http://192.168.43.127:8888'
// 创建 app 实例
const app = createApp(App)

app.use(VueAxios,axios)
app.use(router)
app.use(ElementPlus)
// 挂载 app 实例
app.mount('#app')