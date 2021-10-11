const tableOptions = {
    title: "用户列表",
    isShowSelection: true,
    propList: [
        {
            prop: "name",
            label: "用户名",
            minWidth: "100",
            showOverflowTooltip: true,
            align: "center"
        },
        {
            prop: "realname",
            label: "真实姓名",
            minWidth: "100",
            showOverflowTooltip: true,
            align: "center"
        },
        {
            prop: "cellphone",
            label: "手机号码",
            minWidth: "150",
            showOverflowTooltip: true,
            align: "center"
        },
        {
            prop: "enable",
            label: "状态",
            minWidth: "80",
            showOverflowTooltip: true,
            align: "center",
            slotName: "status"
        },
        {
            prop: "createAt",
            label: "创建时间",
            minWidth: "150",
            showOverflowTooltip: true,
            align: "center",
            slotName: "createAt"
        },
        {
            prop: "updateAt",
            label: "更新时间",
            minWidth: "150",
            showOverflowTooltip: true,
            align: "center",
            slotName: "updateAt"
        }
    ]
}
export default tableOptions
