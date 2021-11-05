import request from "@/service/request.js"
// 系统管理--角色管理--列表
export function getRoleList(data, options = { showLoading: true }) {
    return request({
        url: "/role/list",
        method: "post",
        data: data,
        options: options
    })
}
// 系统管理--角色管理--新增角色
export function addRoleData(data) {
    return request({
        url: "/role",
        method: "post",
        data: data
    })
}
