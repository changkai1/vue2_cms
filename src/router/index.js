import Vue from "vue"
import VueRouter from "vue-router"
import localCache from "@/utils/cache"
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "Login",
        component: () => import(/* webpackChunkName: "login" */ "@/views/login/Login.vue")
    },
    {
        path: "/main",
        name: "Main",
        component: () => import("@/views/main/Main.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/notFound/NotFound.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
    if (to.path !== "/login") {
        const token = localCache.getCache("token")
        if (!token) {
            router.replace("/login")
        }
    }
    next()
})

export default router
