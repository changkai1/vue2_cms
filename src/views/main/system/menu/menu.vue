<template>
    <div class="menu">
        <el-card class="card-mt10">
            <base-table :dataList="dataList" v-bind="tableOptions">
                <template slot="createTime" slot-scope="scope">
                    <span>{{ $utils.formatUtcTime(scope.row.createAt) }}</span>
                </template>
                <template slot="updateTime" slot-scope="scope">
                    <span>{{ $utils.formatUtcTime(scope.row.updateAt) }}</span>
                </template>
            </base-table>
        </el-card>
    </div>
</template>

<script>
import BaseTable from "@/components/baseTable"
import tableOptions from "./config/table"
import { getMenuList } from "@/api/system/menu/menu"
export default {
    name: "systemMenu",
    components: {
        BaseTable
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
            }
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
            getMenuList(data).then((res) => {
                this.dataList = res.data.list
                this.pageData.totalCount = res.data.totalCount
            })
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
