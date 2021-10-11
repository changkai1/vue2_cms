<template>
    <div class="user">
        <el-card class="box-card">
            <base-search :queryForm="queryForm">
                <template v-slot:formItem>
                    <el-form-item label="姓名">
                        <el-input v-model.trim="queryForm.name" placeholder="请输入" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码">
                        <el-input v-model.trim="queryForm.cellphone" placeholder="请输入" clearable></el-input>
                    </el-form-item>
                </template>
            </base-search>
        </el-card>
    </div>
</template>

<script>
import BaseSearch from "@/components/baseSearch"
export default {
    name: "user",
    components: {
        BaseSearch
    },
    data() {
        return {
            queryForm: {
                name: "",
                cellphone: ""
            }
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped></style>
