<template>
    <div class="base-pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 30, 50, 100]"
            :page-size="size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: "basePagination",
    props: {
        // 总条数
        totalCount: {
            type: Number,
            default: 0
        },
        // 每页显示条数
        size: {
            type: Number,
            default: 10
        },
        // 当前页
        currentPage: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {}
    },
    methods: {
        // 每页条数
        handleSizeChange(pageSize) {
            this.$emit("handleSizeChange", pageSize)
            this.$emit("queryList")
            console.log("pageSize", pageSize)
        },
        // 当前页
        handleCurrentChange(currentPage) {
            this.$emit("handleCurrentChange", currentPage)
            this.$emit("queryList")
            console.log("currentPage", currentPage)
        }
    }
}
</script>

<style lang="scss" scoped>
.base-pagination {
    margin-top: 10px;
    text-align: right;
}
</style>
