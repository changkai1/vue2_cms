<template>
    <div class="login-account">
        <el-form :model="formData" :rules="rules" ref="refFormData" label-width="60px">
            <el-form-item label="账号" prop="name">
                <el-input v-model="formData.name" size="small"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="formData.password" size="small" show-password></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import localCache from "@/utils/cache"
export default {
    name: "LoginAccount",
    data() {
        return {
            formData: {
                name: "",
                password: ""
            },
            rules: {
                name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }]
            }
        }
    },
    methods: {
        // 账号密码登录逻辑
        loginAccount(checked) {
            this.$refs.refFormData.validate((valid) => {
                if (valid) {
                    // 判断是否记住密码
                    if (checked) {
                        localCache.setCache("name", this.formData.name)
                        localCache.setCache("password", this.formData.password)
                    } else {
                        localCache.deleteCache("name")
                        localCache.deleteCache("password")
                    }
                    this.$store.dispatch("login/accountLoginAction", { ...this.formData })
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>
