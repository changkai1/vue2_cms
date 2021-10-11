<template>
    <div class="base-search">
        <el-form
            ref="refBaseSearch"
            :inline="true"
            :model="queryForm"
            class="demo-form-inline"
            size="small"
            label-width="80px"
            label-position="right">
            <slot name="formItem"></slot>
            <div class="foot-btn">
                <el-button size="small" @click="resetData">重置</el-button>
                <el-button size="small" type="primary" @click="searchData">查询</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "baseSearch",
    props: {
        queryForm: {
            type: Object,
            require: true
        }
    },
    data() {
        return {}
    },
    methods: {
        // 重置
        resetData() {},
        // 搜索
        searchData() {}
    }
}
</script>

<style lang="scss" scoped>
.base-search {
    padding: 2px;
    .foot-btn {
        text-align: right;
    }
}
</style>
