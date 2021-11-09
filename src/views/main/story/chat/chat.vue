<template>
    <div class="chat">
        <base-editor
            @handleChange="handleChange"
            :value="htmlString"
            v-bind="editorConfig"
            ref="editorRef"></base-editor>
        <el-button type="primary" size="small" class="btn" @click="saveData">保存</el-button>
    </div>
</template>

<script>
import BaseEditor from "@/components/baseEditor"
export default {
    name: "chat",
    components: {
        BaseEditor
    },
    data() {
        return {
            htmlString: "",
            editorConfig: {
                focus: true,
                height: 500
            }
        }
    },
    methods: {
        handleChange(htmlString) {
            this.htmlString = htmlString
        },
        saveData() {
            let htmlStr = this.$refs.editorRef.html
            console.log("保存", htmlStr)
        }
    }
}
</script>

<style lang="scss" scoped>
.chat {
    .btn {
        margin-top: 10px;
    }
}
</style>
