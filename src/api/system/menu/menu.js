import request from "@/service/request.js"
// 系统管理--用户管理--列表
export function getMenuList(data, options = { showLoading: true }) {
    return request({
        url: "/menu/list",
        method: "post",
        data: data,
        options: options
    })
}
