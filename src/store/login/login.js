import router from "@/router"
import { accountLogin, getUserInfoById, getUserMenuByRoleId } from "@/api/login/login"
import localCache from "@/utils/cache"
const login = {
    namespaced: true,
    state() {
        return {
            token: localCache.getCache("token") ? localCache.getCache("token") : "",
            userInfo: localCache.getCache("userInfo") ? localCache.getCache("userInfo") : {},
            userMenus: localCache.getCache("userMenus") ? localCache.getCache("userMenus") : []
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
        }
    }
}
export default login
