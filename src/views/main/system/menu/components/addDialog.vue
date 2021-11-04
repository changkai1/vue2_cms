<template>
    <div class="addDialog">
        <base-dialog :dialogVisible="dialogVisible" v-bind="dialogConfig" @changeDialogVisible="changeDialogVisible">
            123
        </base-dialog>
    </div>
</template>

<script>
import BaseDialog from "@/components/baseDialog"
export default {
    name: "addDialog",
    props: {
        dialogVisible: {
            type: Boolean
        }
    },
    components: {
        BaseDialog
    },
    data() {
        return {
            dialogConfig: {
                title: "新增"
            }
        }
    },
    methods: {
        changeDialogVisible() {
            this.$emit("update:dialogVisible", false)
        }
    }
}
</script>

<style lang="scss" scoped></style>
