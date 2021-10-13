<template>
    <div class="base-table">
        <!-- 列表表头 -->
        <div class="table-header">
            <div class="header-left">
                <slot name="tableHeader">
                    <div class="title"><i class="el-icon-s-data"></i>{{ title }}</div>
                </slot>
            </div>
            <div class="header-right">
                <slot name="tableHandler"></slot>
            </div>
        </div>
        <!-- 列表 -->
        <el-table :data="dataList" border size="mini" header-row-class-name="table-header-row" height="200">
            <el-table-column v-if="isShowSelection" type="selection" width="80" align="center"></el-table-column>
            <el-table-column
                v-if="isShowSerialNum"
                label="序号"
                type="index"
                width="80"
                align="center"></el-table-column>
            <template v-for="item in propList">
                <el-table-column :key="item.prop" v-bind="item">
                    <template slot-scope="scope">
                        <div v-if="!item.slotName">
                            {{ scope.row[item.prop] }}
                        </div>
                        <!-- 具名插槽 -->
                        <slot v-else :name="item.slotName" :row="scope.row"></slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "baseTable",
    props: {
        title: {
            type: String,
            default: ""
        },
        // 多选框
        isShowSelection: {
            type: Boolean,
            default: false
        },
        // 序号
        isShowSerialNum: {
            type: Boolean,
            default: false
        },
        // 列表数据
        dataList: {
            type: Array,
            required: true
        },
        // 表格配置
        propList: {
            type: Array,
            required: true
        }
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.base-table {
    .table-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
        .header-left {
            .title {
                font-weight: 700;
                i {
                    margin-right: 5px;
                }
            }
        }
        .header-right {
            flex: 1;
            margin-left: 20px;
            text-align: right;
        }
    }
}
</style>
