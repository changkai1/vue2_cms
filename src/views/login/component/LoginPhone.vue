<template>
    <div class="login-phone">
        <el-form :model="formData" :rules="rules" ref="refFormData" label-width="70px">
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="formData.phone" size="small"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <div class="code">
                    <el-input v-model="formData.code" size="small"></el-input>
                    <el-button type="primary" size="small" class="code-btn">获取验证码</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "login-phone",
    data() {
        return {
            formData: {
                phone: "",
                code: ""
            },
            rules: {
                phone: [{ required: true, message: "请输入用户名", trigger: "blur" }],
                code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
            }
        }
    },
    methods: {
        // 手机登录逻辑
        loginAccount(checked) {
            console.log(checked)
        }
    }
}
</script>

<style lang="scss" scoped>
.login-phone {
    .code {
        display: flex;
        justify-content: center;
        align-items: center;
        .code-btn {
            margin-left: 5px;
        }
    }
}
</style>
