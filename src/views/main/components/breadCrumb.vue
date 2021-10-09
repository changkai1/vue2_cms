<template>
    <div class="bread-crumb">
        <el-breadcrumb separator="/">
            <template v-for="item in breadCrumbs">
                <!-- <el-breadcrumb-item :key="item.id" :to="{ path: item.url }">{{ item.name }}</el-breadcrumb-item> -->
                <el-breadcrumb-item :key="item.id">{{ item.name }}</el-breadcrumb-item>
            </template>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: "breadCrumb",
    props: {
        breadCrumbs: {
            type: Array
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>
