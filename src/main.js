import Vue from "vue"
import App from "./App.vue"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "normalize.css"
import "@/assets/css/index.scss"
import router from "./router"
import store from "./store"
import { setupStore } from "./store"

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(store)
setupStore()
Vue.use(router)
// 获取环境变量
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
// console.log(process.env.NODE_ENV)

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app")
