<template>
    <div class="base-dialog-form">
        <el-dialog
            :title="title"
            width="550px"
            :visible.sync="dialogVisible"
            append-to-body
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :before-close="resetDialogData"
            custom-class="dialog">
            <el-form :model="dialogForm" :label-width="labelWidth" size="small" class="dialog-form">
                <slot name="baseDialog"></slot>
            </el-form>
            <div slot="footer">
                <slot name="formFooter">
                    <el-button @click="resetDialogData" size="small">取 消</el-button>
                    <el-button type="primary" @click="confirmData" size="small">确 定</el-button>
                </slot>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import cloneDeep from "lodash.clonedeep"
export default {
    name: "baseDialog",
    props: {
        title: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: "550px"
        },
        labelWidth: {
            type: String,
            default: "100px"
        },
        dialogVisible: {
            type: Boolean,
            required: true
        },
        dialogForm: {
            type: Object,
            required: true
        }
    },
    data() {
        return {}
    },
    methods: {
        // 取消
        resetDialogData() {
            let dialogForm = cloneDeep(this.dialogForm)
            for (let key in dialogForm) {
                dialogForm[key] = ""
            }
            this.$emit("resetDialogField", dialogForm)
        },
        // 确定
        confirmData() {
            this.$emit("queryList")
            this.resetDialogData()
        }
    }
}
</script>
