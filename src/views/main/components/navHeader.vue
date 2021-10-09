<template>
    <div class="nav-header">
        <i class="fold-menu" :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="handleFoldClick"></i>
        <div class="content">
            <bread-crumb :breadCrumbs="breadCrumbs"></bread-crumb>
            <user-info></user-info>
        </div>
    </div>
</template>

<script>
import BreadCrumb from "./breadCrumb"
import UserInfo from "./userInfo"
import { pathMapBreadCrumbs } from "@/utils/mapMenus"
export default {
    name: "navHeader",
    components: {
        BreadCrumb,
        UserInfo
    },
    data() {
        return {
            isFold: false
        }
    },
    computed: {
        breadCrumbs() {
            let userMenus = this.$store.state.login.userMenus
            let currentPath = this.$route.path
            return pathMapBreadCrumbs(userMenus, currentPath)
        }
    },
    methods: {
        handleFoldClick() {
            this.isFold = !this.isFold
            this.$emit("foldChange", this.isFold)
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-header {
    display: flex;
    width: 100%;
    .fold-menu {
        font-size: 25px;
        cursor: pointer;
    }
    .content {
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }
}
</style>
