<template>
    <div class="base-dialog">
        <el-dialog
            :title="title"
            width="550px"
            :visible.sync="dialogVisible"
            append-to-body
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :before-close="handleClose">
            <slot></slot>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "baseDialog",
    props: {
        title: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: "550px"
        },
        dialogVisible: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {}
    },
    methods: {
        // 关闭弹窗
        handleClose() {
            this.$emit("changeDialogVisible")
        }
    }
}
</script>

<style lang="scss" scoped></style>
