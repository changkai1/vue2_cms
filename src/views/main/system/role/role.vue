<template>
    <div class="menu">
        <el-card class="card-mt10">
            <base-table :dataList="dataList" v-bind="tableOptions">
                <template slot="tableHandler">
                    <el-button type="primary" size="small" @click="roleAddData">新增</el-button>
                </template>
                <template slot="createTime" slot-scope="scope">
                    <span>{{ $utils.formatUtcTime(scope.row.createAt) }}</span>
                </template>
                <template slot="updateTime" slot-scope="scope">
                    <span>{{ $utils.formatUtcTime(scope.row.updateAt) }}</span>
                </template>
                <template slot="handler" slot-scope="scope">
                    <el-button type="text" icon="el-icon-delete" @click="deleteData(scope.row)">删除</el-button>
                    <el-button type="text" icon="el-icon-edit" @click="editData(scope.row)">编辑</el-button>
                </template>
            </base-table>
        </el-card>
        <edit-dialog :dialogVisible.sync="roleDialogVisible" :source="source" @queryList="queryList"></edit-dialog>
    </div>
</template>

<script>
import BaseTable from "@/components/baseTable"
import tableOptions from "./config/table"
import EditDialog from "./components/editDialog"
import { getRoleList } from "@/api/system/role/role"
export default {
    name: "role",
    components: {
        BaseTable,
        EditDialog
    },
    data() {
        return {
            tableOptions: tableOptions,
            dataList: [],
            pageData: {
                currentPage: 1,
                size: 10,
                totalCount: 0,
                offset: 0
            },
            roleDialogVisible: false,
            source: 1 // 1 新增 2 编辑
        }
    },
    created() {
        this.queryList()
    },
    methods: {
        // 菜单列表
        queryList() {
            let data = {
                offset: (this.pageData.currentPage - 1) * this.pageData.size,
                size: this.pageData.size
            }
            getRoleList(data).then((res) => {
                this.dataList = res.data.list
                this.pageData.totalCount = res.data.totalCount
            })
        },
        // 新增
        roleAddData() {
            this.source = 1
            this.roleDialogVisible = true
        },
        editData(row) {
            this.source = 2
            this.roleDialogVisible = true
            console.log("edit", row)
        },
        // 删除
        deleteData(row) {
            console.log("delete", row)
        },
        // 页码
        handleCurrentChange(currentPage) {
            this.pageData.currentPage = currentPage
        },
        // 每页条数
        handleSizeChange(pageSize) {
            this.pageData.currentPage = 1
            this.pageData.size = pageSize
        }
    }
}
</script>

<style lang="scss" scoped></style>
