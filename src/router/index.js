import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "@/views/login/Login.vue")
    },
    {
        path: "/main",
        name: "main",
        component: () => import(/* webpackChunkName: "login" */ "@/views/login/Login.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
