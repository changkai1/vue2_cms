const tableOptions = {
    title: "角色列表",
    isShowSelection: true,
    isShowSerialNum: true,
    propList: [
        {
            prop: "name",
            label: "角色名称",
            minWidth: "100",
            showOverflowTooltip: true,
            align: "center"
        },
        {
            prop: "intro",
            label: "角色权限",
            minWidth: "100",
            showOverflowTooltip: true,
            align: "center"
        },
        {
            prop: "createAt",
            label: "创建时间",
            minWidth: "150",
            align: "center",
            slotName: "createTime"
        },
        {
            prop: "updateAt",
            label: "更新时间",
            minWidth: "150",
            align: "center",
            slotName: "updateTime"
        },
        {
            label: "操作",
            minWidth: "150",
            align: "center",
            slotName: "handler"
        }
    ]
}
export default tableOptions
