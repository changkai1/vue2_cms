<template>
    <div class="main">
        <el-container class="main-content">
            <el-aside :width="isCollapse ? '58px' : '210px'">
                <nav-menu :isCollapse="isCollapse"></nav-menu>
            </el-aside>
            <el-container class="page page-target">
                <el-header class="page-header">
                    <nav-header @foldChange="handleFoldChange"></nav-header>
                </el-header>
                <el-main class="page-content">
                    <div class="page-info">
                        <router-view></router-view>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import NavMenu from "./components/navMenu"
import NavHeader from "./components/navHeader"
export default {
    name: "Main",
    components: {
        NavMenu,
        NavHeader
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        handleFoldChange(val) {
            this.isCollapse = val
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.main-content,
.page {
    height: 100%;
}

.page-content {
    height: calc(100% - 48px);
    padding: 10px;
    .page-info {
        // background-color: #fff;
        // border-radius: 2px;
    }
}

.el-header,
.el-footer {
    display: flex;
    color: #333;
    text-align: center;
    align-items: center;
}

.el-header {
    height: 48px !important;
}

.el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
        display: none;
    }
}

.el-main {
    color: #333;
    text-align: left;
    background-color: #f0f2f5;
}
</style>
