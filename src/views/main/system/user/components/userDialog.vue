<template>
    <div class="user-dialog">
        <base-dialog-form
            @queryList="queryList"
            @resetDialogField="resetDialogField"
            :dialogForm="dialogForm"
            :dialogVisible="dialogVisible"
            v-bind="dialogConfig">
            <template v-slot:baseDialog>
                <el-form-item label="用户名">
                    <el-input v-model.trim="dialogForm.name"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input v-model.trim="dialogForm.realName"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model.trim="dialogForm.phone"></el-input>
                </el-form-item>
            </template>
        </base-dialog-form>
    </div>
</template>

<script>
import BaseDialogForm from "@/components/baseDialogForm"
export default {
    name: "userDialog",
    components: {
        BaseDialogForm
    },
    props: {
        dialogVisible: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            dialogForm: {
                name: "",
                realName: "",
                phone: ""
            },
            dialogConfig: {
                title: "新增"
            }
        }
    },
    methods: {
        // 弹窗关闭清空表单
        resetDialogField(obj) {
            this.dialogForm = obj
            this.$emit("update:dialogVisible", false)
        },
        queryList() {
            this.$emit("queryList")
        }
    }
}
</script>
