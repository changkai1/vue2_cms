<template>
    <div class="nav-menu">
        <div class="logo">
            <img class="img" src="~@/assets/img/logo.svg" alt="" />
            <span class="title">Vue2+JS</span>
        </div>
        <el-menu
            class="el-menu-vertical"
            :default-active="defaultValue"
            background-color="#0c2135"
            text-color="#b7bdc3"
            active-text-color="#0a60bd">
            <template v-for="item in userMenus">
                <!-- 一级菜单 -->
                <template v-if="item.type == 2">
                    <el-menu-item :index="item.id + ''" :key="item.id">
                        <i v-if="item.icon" :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </template>
                <!-- 二级菜单 -->
                <template v-else-if="item.type == 1">
                    <!-- 二级可展开的标题 -->
                    <el-submenu :index="item.id + ''" :key="item.id">
                        <template slot="title">
                            <i v-if="item.icon" :class="item.icon"></i>
                            <span>{{ item.name }}</span>
                        </template>
                        <!-- 二级下拉菜单 -->
                        <template v-for="subitem in item.children">
                            <el-menu-item
                                :index="subitem.id + ''"
                                :key="subitem.id"
                                @click="handleMenuItemClick(subitem)">
                                <i v-if="item.icon" :class="item.icon"></i>
                                <span>{{ subitem.name }}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { pathMapToMenu } from "@/utils/mapMenus"
export default {
    name: "nav-menu",
    data() {
        return {
            defaultValue: ""
        }
    },
    methods: {
        handleMenuItemClick(subitem) {
            console.log("subitem", subitem)
            let url = subitem.url ? subitem.url : "/notFound"
            console.log(url)
            this.$router.push({
                path: url
            })
        }
    },
    computed: {
        userMenus() {
            return this.$store.state.login.userMenus
        }
    },
    created() {
        let currentPath = this.$route.path
        let menu = pathMapToMenu(this.userMenus, currentPath)
        this.defaultValue = menu.id + ""
    }
}
</script>

<style lang="scss" scoped>
.nav-menu {
    height: 100%;
    background-color: #001529;

    .logo {
        display: flex;
        height: 28px;
        padding: 12px 10px 8px 10px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .img {
            height: 100%;
            margin: 0 10px;
        }

        .title {
            font-size: 16px;
            font-weight: 700;
            color: white;
        }
    }

    .el-menu {
        border-right: none;
    }

    // 目录
    .el-submenu {
        background-color: #001529 !important;
        // 二级菜单 ( 默认背景 )
        .el-menu-item {
            padding-left: 50px !important;
            background-color: #0c2135 !important;
        }
    }

    ::v-deep .el-submenu__title {
        background-color: #001529 !important;
    }

    // hover 高亮
    .el-menu-item:hover {
        color: #fff !important; // 菜单
    }

    .el-menu-item.is-active {
        color: #fff !important;
        background-color: #0a60bd !important;
    }
}
.el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
}
</style>
