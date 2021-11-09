<template>
    <div class="base-editor" ref="baseEditorRef" :style="{ width: width ? `${width}px` : '100%' }"></div>
</template>

<script>
import E from "wangeditor"
export default {
    name: "baseEditor",
    props: {
        zIndex: {
            type: Number,
            default: 500
        },
        height: {
            type: Number,
            default: 300
        },
        width: {
            type: Number,
            default: 0
        },
        focus: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            editor: null,
            html: "",
            text: ""
        }
    },
    watch: {
        value: {
            handler() {
                this.initEditorContent()
            },
            deep: true
        }
    },
    mounted() {
        this.createWangEditor()
    },
    beforeDestroy() {
        this.editor.destroy()
        this.editor = null
    },
    methods: {
        // 创建editor
        createWangEditor() {
            this.editor = new E(this.$refs.baseEditorRef)
            console.log("editor", this.editor)
            this.setEditorConfig()
            this.editor.create()
            // create 之后才能初始化
            this.initEditorContent()
        },
        // 初始化
        initEditorContent() {
            // 设置内容
            this.editor.txt.html(this.value)
        },
        // 配置editor
        setEditorConfig() {
            // 设置编辑区域的高度
            this.editor.config.height = this.height
            // 配置 z-index
            this.editor.config.zIndex = this.zIndex
            // 取消 focus
            this.editor.config.focus = this.focus
            // 配置 onchange 回调函数
            this.editor.config.onchange = (newHtml) => {
                this.html = newHtml
                this.$emit("handleChange", this.html)
            }
            // 配置触发 onchange 的时间频率，默认为 200ms
            this.editor.config.onchangeTimeout = 500 // 修改为 500ms
            // 隐藏菜单栏提示
            this.editor.config.showMenuTooltips = true
            this.editor.config.menuTooltipPosition = "down"
            // 配置菜单栏，删减菜单，调整顺序
            this.editor.config.menus = [
                "head",
                "bold",
                "fontSize",
                "fontName",
                "italic",
                "underline",
                "strikeThrough",
                "indent",
                "lineHeight",
                "foreColor",
                "backColor",
                "link",
                "list",
                // 'todo',
                "justify",
                "quote",
                // 'emoticon',
                // 'image',
                // 'video',
                // 'table',
                "code",
                "splitLine",
                "undo",
                "redo"
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>
