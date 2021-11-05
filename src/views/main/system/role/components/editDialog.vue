<template>
    <div class="edit-dialog">
        <base-dialog :dialogVisible="dialogVisible" v-bind="dialogConfig" @changeDialogVisible="changeDialogVisible">
            <template>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" size="small">
                    <el-form-item label="角色名称" prop="name">
                        <el-col :span="16">
                            <el-input v-model.trim="ruleForm.name" clearable></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="角色权限" prop="intro">
                        <el-col :span="16">
                            <el-input v-model.trim="ruleForm.intro" clearable></el-input>
                        </el-col>
                    </el-form-item>
                </el-form>
                <el-tree
                    ref="treeRef"
                    :data="treeData"
                    :props="props"
                    :check-strictly="false"
                    node-key="id"
                    show-checkbox
                    @check="handleMenuCheckChange">
                </el-tree>
                <div class="footer">
                    <el-button size="small" @click="handleCancel">取消</el-button>
                    <el-button type="primary" size="small" @click="handleSubmit">确定</el-button>
                </div>
            </template>
        </base-dialog>
    </div>
</template>

<script>
import BaseDialog from "@/components/baseDialog"
import { getMenuList } from "@/api/system/menu/menu"
import { addRoleData } from "@/api/system/role/role"
export default {
    name: "editDialog",
    props: {
        dialogVisible: {
            type: Boolean
        },
        source: {
            type: Number,
            required: true
        }
    },
    components: {
        BaseDialog
    },
    data() {
        return {
            dialogConfig: {
                title: "新增",
                width: "40%"
            },
            ruleForm: {
                name: "",
                intro: ""
            },
            rules: {
                name: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
                intro: [{ required: true, message: "请输入角色权限", trigger: "blur" }]
            },
            props: {
                label: "name",
                children: "children"
            },
            treeData: [],
            menuList: []
        }
    },
    watch: {
        source(val) {
            if (val == 1) {
                this.dialogConfig.title = "新增"
            } else if (val == 2) {
                this.dialogConfig.title = "编辑"
            }
        }
    },
    methods: {
        changeDialogVisible() {
            this.$emit("update:dialogVisible", false)
        },
        // 角色列表
        list() {
            let data = {}
            let options = {
                showLoading: false
            }
            getMenuList(data, options).then((res) => {
                this.treeData = res.data.list
            })
        },
        // 当复选框被点击的时候触发
        handleMenuCheckChange(data1, data2) {
            console.log("data1", data1)
            console.log("data2", data2)
            let checkedKeys = data2.checkedKeys
            let halfCheckedKeys = data2.halfCheckedKeys
            let menuList = [...checkedKeys, ...halfCheckedKeys]
            console.log("menuList", menuList)
            this.menuList = menuList
        },
        // 取消
        handleCancel() {
            this.$refs.treeRef.setCheckedKeys([], false)
            this.ruleForm.name = ""
            this.ruleForm.intro = ""
            this.menuList = []
            this.changeDialogVisible()
        },
        // 确定
        handleSubmit() {
            let data = {
                ...this.ruleForm,
                menuList: this.menuList
            }
            addRoleData(data).then((res) => {
                console.log(res)
                if (res.code == 0) {
                    this.$message.success(res.data)
                    this.$emit("queryList")
                    this.handleCancel()
                }
            })
        }
    },
    created() {
        this.list()
    }
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: center;
}
</style>
