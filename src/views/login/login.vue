<template>
    <div class="login">
        <div class="content">
            <h2 class="login-title">后台管理系统</h2>
            <el-tabs v-model="activeName" type="border-card" stretch class="login-tabs">
                <el-tab-pane label="账号登录" name="account">
                    <span slot="label"><i class="el-icon-user-solid login-tab-pane-icon"></i>账号登录</span>
                    <login-account ref="refLoginAccount"></login-account>
                </el-tab-pane>
                <el-tab-pane label="手机登录" name="phone">
                    <span slot="label"><i class="el-icon-mobile-phone login-tab-pane-icon"></i>手机登录</span>
                    <login-phone ref="refLoginPhone"></login-phone>
                </el-tab-pane>
            </el-tabs>
            <div class="login-footer">
                <el-checkbox v-model="checked">记住密码</el-checkbox>
                <el-link type="primary">忘记密码</el-link>
            </div>
            <el-button type="primary" style="width: 100%" @click="login">立即登录</el-button>
        </div>
    </div>
</template>

<script>
import LoginAccount from "./component/LoginAccount"
import LoginPhone from "./component/LoginPhone"
export default {
    name: "login",
    components: {
        LoginAccount,
        LoginPhone
    },
    data() {
        return {
            checked: true,
            activeName: "account"
        }
    },
    methods: {
        /**
         * 立即登录
         * account 账号 phone 手机号
         * */
        login() {
            if (this.activeName == "account") {
                this.$refs.refLoginAccount.loginAccount(this.checked)
            } else if (this.activeName == "phone") {
                this.$refs.refLoginPhone.loginPhone(this.checked)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    background: url("../../assets/img/login-bg.svg");
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .content {
        width: 380px;
        .login-title {
            margin-bottom: 10px;
            font-size: 20px;
            text-align: center;
        }
        .login-tabs {
            margin-bottom: 10px;
            .login-tab-pane-icon {
                margin-right: 2px;
            }
        }
        .login-footer {
            display: flex;
            justify-content: space-between;
            margin: 0 5px 10px 5px;
        }
    }
}
</style>
