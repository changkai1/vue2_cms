<template>
    <div class="base-pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: "basePagination",
    data() {
        return {}
    },
    methods: {
        // 每页条数
        handleSizeChange() {},
        // 当前页
        handleCurrentChange() {}
    }
}
</script>

<style lang="scss" scoped></style>
