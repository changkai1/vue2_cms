import request from "@/service/request.js"
// 登录(用户名/密码)
export function accountLogin(data) {
    return request({
        url: "/login",
        method: "post",
        data: data,
        options: {
            showLoading: false
        }
    })
}

// 获取用户信息
export function getUserInfoById(id) {
    return request({
        url: `/users/${id}`,
        method: "get",
        options: {
            showLoading: false
        }
    })
}

// 获取用户菜单
export function getUserMenuByRoleId(roleId) {
    return request({
        url: `/role/${roleId}/menu`,
        method: "get",
        options: {
            showLoading: false
        }
    })
}
