import Vue from "vue"
import Vuex from "vuex"
import login from "./login/login"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        login
    }
})
export function setupStore() {
    store.dispatch("login/loadLocalLogin")
}
export default store
