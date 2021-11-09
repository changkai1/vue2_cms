import request from "@/service/request.js"
// 系统总览--商品统计--商品统计列表
export function getAmountList(data, options = { showLoading: true }) {
    return request({
        url: "/goods/amount/list",
        method: "get",
        options: options
    })
}
