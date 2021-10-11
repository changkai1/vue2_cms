<template>
    <div class="user">
        <el-card>
            <base-search :queryForm="queryForm" @resetField="resetField">
                <template v-slot:formItem>
                    <el-form-item label="姓名">
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
                    <el-button plain size="small">新增</el-button>
                </template>
                <!-- 列表中的插槽 -->
                <template slot="status" slot-scope="scope">
                    <el-link :type="scope.row.enable ? 'success' : 'danger'" :underline="false">
                        {{ scope.row.enable ? "启用" : "禁用" }}
                    </el-link>
                </template>
                <template slot="createAt" slot-scope="scope">
                    <span>{{ $utils.formatUtcTime(scope.row.createAt) }}</span>
                </template>
                <template slot="updateAt" slot-scope="scope">
                    <span>{{ $utils.formatUtcTime(scope.row.updateAt) }}</span>
                </template>
            </base-table>
            <base-pagination></base-pagination>
        </el-card>
    </div>
</template>

<script>
import BaseSearch from "@/components/baseSearch"
import BaseTable from "@/components/baseTable"
import BasePagination from "@/components/basePagination"
import tableOptions from "./config/userTable"
import { getUserList } from "@/api/system/user/user"
export default {
    name: "user",
    components: {
        BaseSearch,
        BaseTable,
        BasePagination
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
                offset: 1,
                size: 10,
                totalCount: 0
            }
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
                offset: this.pageData.offset,
                size: this.pageData.size
            }
            getUserList(data).then((res) => {
                this.dataList = res.data.list
            })
        },
        // 重置
        resetField(obj) {
            this.queryForm = obj
        }
    }
}
</script>

<style lang="scss" scoped></style>
