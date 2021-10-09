<template>
    <div class="user-info">
        <el-avatar class="avatar" size="small" :src="circleUrl"></el-avatar>
        <el-dropdown>
            <span class="el-dropdown-link">{{ userName }}</span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user">用户信息</el-dropdown-item>
                <el-dropdown-item icon="el-icon-setting">系统信息</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-close" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: "userInfo",
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        }
    },
    computed: {
        userName() {
            return this.$store.state.login.userInfo.name
        }
    }
}
</script>

<style lang="scss" scoped>
.user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar {
        margin-right: 10px;
        cursor: pointer;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409eff;
    }
}
</style>
