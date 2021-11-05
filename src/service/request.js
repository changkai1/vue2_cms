import axios from "axios"
import { API_BASE_URL } from "./config"
import { Loading } from "element-ui"
import { Message } from "element-ui"
import localCache from "@/utils/cache"
const service = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10 * 1000
})
let loadingInstance
// 请求拦截
service.interceptors.request.use(
    // 请求发送成功执行的函数
    (config) => {
        console.log("request-config", config)
        // 添加token拦截
        const token = localCache.getCache("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        if (config.options && config.options.showLoading) {
            loadingInstance = Loading.service({
                lock: true,
                text: "加载中",
                target: document.querySelector(".page-target")
            })
        }
        return config
    },
    // 请求发送失败执行的函数
    (err) => {
        // console.log("request-error", err)
        loadingInstance.close()
        Message.error(err.response.data)
        return Promise.reject(err)
    }
)

// 响应拦截
service.interceptors.response.use(
    // 响应成功的拦截
    (res) => {
        console.log("response-res", res)
        if (res.status === 200) {
            if (res.config.options && res.config.options.showLoading) {
                loadingInstance.close()
            }
            // 拦截接口返回错误的信息提示
            if (res.data.code != 0) {
                Message.error(res.data.msg)
            }
            return Promise.resolve(res.data)
        }
    },
    (error) => {
        // console.log("response-error", error.response)
        // console.log("response-error", error.response.data)
        if (error.response.config.options && error.response.config.options.showLoading) {
            loadingInstance.close()
        }
        Message.error(error.response.data)
        return Promise.reject(error)
    }
)
export default service
