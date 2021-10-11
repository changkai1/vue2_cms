import request from "@/service/request.js"
// 系统管理--用户管理--列表
export function getUserList(data) {
    return request({
        url: "/users/list",
        method: "post",
        data: data,
        options: {
            showLoading: true
        }
    })
}
