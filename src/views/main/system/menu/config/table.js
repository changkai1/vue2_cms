const tableOptions = {
    title: "菜单列表",
    isShowSelection: false,
    isShowSerialNum: false,
    propList: [
        {
            prop: "name",
            label: "菜单名称",
            minWidth: "100",
            showOverflowTooltip: true,
            align: "center"
        },
        {
            prop: "type",
            label: "级别",
            minWidth: "100",
            showOverflowTooltip: true,
            align: "center"
        },
        {
            prop: "url",
            label: "菜单url",
            minWidth: "150",
            showOverflowTooltip: true,
            align: "center"
        },
        {
            prop: "icon",
            label: "菜单icon",
            minWidth: "150",
            showOverflowTooltip: true,
            align: "center"
        },
        {
            prop: "sort",
            label: "排序",
            minWidth: "150",
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
        }
    ],
    childrenProps: {
        rowKey: "id",
        treeProp: {
            children: "children"
        }
    }
}
export default tableOptions
