<template>
    <div class="base-search">
        <el-form
            ref="refBaseSearch"
            :inline="true"
            :model="queryForm"
            :size="size"
            :label-width="labelWidth"
            :label-position="labelPosition">
            <slot name="formItem"></slot>
            <div class="foot-btn">
                <el-button size="small" @click="resetData">重置</el-button>
                <el-button size="small" type="primary" @click="searchData">查询</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import cloneDeep from "lodash.clonedeep"
export default {
    name: "baseSearch",
    props: {
        size: {
            type: String,
            default: "small"
        },
        labelPosition: {
            type: String,
            default: "right"
        },
        labelWidth: {
            type: String,
            default: "80px"
        },
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
        resetData() {
            let queryForm = cloneDeep(this.queryForm)
            for (let key in queryForm) {
                queryForm[key] = ""
            }
            this.$emit("resetField", queryForm)
        },
        // 查询
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
