import router from "@/router"
import { accountLogin, getUserInfoById, getUserMenuByRoleId } from "@/api/login/login"
import localCache from "@/utils/cache"
import { mapMenusToRoutes } from "@/utils/mapMenus"
const login = {
    namespaced: true,
    state() {
        return {
            token: "",
            userInfo: {},
            userMenus: []
        }
    },
    getters: {},
    mutations: {
        changeToken(state, token) {
            state.token = token
        },
        changeUserInfo(state, userInfo) {
            state.userInfo = userInfo
        },
        changeUserMenus(state, userMenus) {
            state.userMenus = userMenus
            const routes = mapMenusToRoutes(userMenus)
            routes.forEach((route) => {
                router.addRoute("main", route)
            })
        }
    },
    actions: {
        async accountLoginAction({ commit }, payload) {
            // 1、登录接口
            let loginRes = await accountLogin(payload)
            console.log("loginRes", loginRes)
            let id = ""
            let token = ""
            if (loginRes.code == 0) {
                let dataInfo = loginRes.data
                id = dataInfo.id
                token = dataInfo.token
                commit("changeToken", token)
                localCache.setCache("token", token)
            }
            // 2、请求用户信息
            let userInfoRes = await getUserInfoById(id)
            let roleId = ""
            if (userInfoRes.code == 0) {
                let userInfo = userInfoRes.data
                roleId = userInfo.role.id
                commit("changeUserInfo", userInfo)
                localCache.setCache("userInfo", userInfo)
            }
            // 请求用户菜单
            let userMenuRes = await getUserMenuByRoleId(roleId)
            if (userMenuRes.code == 0) {
                let userMenus = userMenuRes.data
                commit("changeUserMenus", userMenus)
                localCache.setCache("userMenus", userMenus)
            }
            router.push("/main")
        },
        loadLocalLogin({ commit }) {
            const token = localCache.getCache("token")
            if (token) {
                commit("changeToken", token)
            }
            const userInfo = localCache.getCache("userInfo")
            if (userInfo) {
                commit("changeUserInfo", userInfo)
            }
            const userMenus = localCache.getCache("userMenus")
            if (userMenus) {
                commit("changeUserMenus", userMenus)
            }
        }
    }
}
export default login
