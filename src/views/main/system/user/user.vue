<template>
    <div class="user">
        <el-card>
            <base-search
                :queryForm="queryForm"
                @resetField="resetField"
                @resetPageData="resetPageData"
                @queryList="queryList">
                <template v-slot:formItem>
                    <el-form-item label="用户名">
                        <el-input v-model.trim="queryForm.name" placeholder="请输入" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码">
                        <el-input v-model.trim="queryForm.cellphone" placeholder="请输入" clearable></el-input>
                    </el-form-item>
                </template>
            </base-search>
        </el-card>
        <el-card class="card-mt10">
            <base-table :dataList="dataList" v-bind="tableOptions">
                <!-- 头部按钮插槽 -->
                <template slot="tableHandler">
                    <el-button plain size="small" @click="addData">新增</el-button>
                </template>
                <!-- 列表中的插槽 -->
                <template slot="status" slot-scope="scope">
                    <el-link :type="scope.row.enable ? 'success' : 'danger'" :underline="false">
                        {{ scope.row.enable ? "启用" : "禁用" }}
                    </el-link>
                </template>
                <!-- 创建时间 -->
                <template slot="createAt" slot-scope="scope">
                    <span>{{ $utils.formatUtcTime(scope.row.createAt) }}</span>
                </template>
                <!-- 更新时间 -->
                <template slot="updateAt" slot-scope="scope">
                    <span>{{ $utils.formatUtcTime(scope.row.updateAt) }}</span>
                </template>
                <!-- 操作列 -->
                <template slot="handler" slot-scope="scope">
                    <div class="handler">
                        <el-button type="text" icon="el-icon-edit" size="mini" @click="handleEditClick(scope.row)">
                            编辑
                        </el-button>
                        <el-button type="text" icon="el-icon-delete" size="mini" @click="handleDeleteClick(scope.row)">
                            删除
                        </el-button>
                    </div>
                </template>
            </base-table>
            <base-pagination
                :totalCount="pageData.totalCount"
                :size="pageData.size"
                :currentPage="pageData.currentPage"
                @handleCurrentChange="handleCurrentChange"
                @handleSizeChange="handleSizeChange"
                @queryList="queryList">
            </base-pagination>
        </el-card>
        <user-dialog ref="userDialogRef" :dialogVisible.sync="userDialogVisible" @queryList="queryList"> </user-dialog>
    </div>
</template>

<script>
import BaseSearch from "@/components/baseSearch"
import BaseTable from "@/components/baseTable"
import BasePagination from "@/components/basePagination"
import tableOptions from "./config/userTable"
import UserDialog from "./components/userDialog"
import { getUserList } from "@/api/system/user/user"
export default {
    name: "user",
    components: {
        BaseSearch,
        BaseTable,
        BasePagination,
        UserDialog
    },
    data() {
        return {
            tableOptions: tableOptions,
            dataList: [],
            queryForm: {
                name: "",
                cellphone: ""
            },
            pageData: {
                currentPage: 1,
                size: 10,
                totalCount: 0,
                offset: 0
            },
            userDialogVisible: false
        }
    },
    created() {
        this.queryList()
    },
    methods: {
        // 用户列表
        queryList() {
            let data = {
                ...this.queryForm,
                offset: (this.pageData.currentPage - 1) * this.pageData.size,
                size: this.pageData.size
            }
            getUserList(data).then((res) => {
                this.dataList = res.data.list
                this.pageData.totalCount = res.data.totalCount
            })
        },
        // 编辑
        handleEditClick(row) {
            console.log(row)
        },
        // 删除
        handleDeleteClick(row) {
            console.log(row)
        },
        // 重置
        resetField(obj) {
            this.queryForm = obj
        },
        // 页码
        handleCurrentChange(currentPage) {
            this.pageData.currentPage = currentPage
        },
        // 每页条数
        handleSizeChange(pageSize) {
            this.pageData.currentPage = 1
            this.pageData.size = pageSize
        },
        // 重置分页
        resetPageData() {
            this.pageData.currentPage = 1
            this.pageData.size = 10
            this.pageData.totalCount = 0
            this.pageData.offset = 0
        },
        // 新增
        addData() {
            this.userDialogVisible = true
        }
    }
}
</script>

<style lang="scss" scoped></style>
