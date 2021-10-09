<template>
    <div class="nav-header">
        <i class="fold-menu" :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="handleFoldClick"></i>
    </div>
</template>

<script>
export default {
    name: "navHeader",
    data() {
        return {
            isFold: false
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
    .fold-menu {
        font-size: 25px;
        cursor: pointer;
    }
}
</style>
