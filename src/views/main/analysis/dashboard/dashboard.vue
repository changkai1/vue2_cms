<template>
    <div class="dashboard">
        <!-- 1.顶部数据统计 -->
        <template v-for="(item, index) in topPanelData">
            <el-col :md="12" :lg="6" :xl="6" :key="index">
                <statistical-panel :panelData="item"></statistical-panel>
            </el-col>
        </template>
    </div>
</template>

<script>
import StatisticalPanel from "./components/statisticalPanel"
import { getAmountList } from "@/api/analysis/dashboard/dashboard"
export default {
    name: "dashboard",
    components: {
        StatisticalPanel
    },
    data() {
        return {
            topPanelData: []
        }
    },
    mounted() {
        this.getGoodsAmountData()
    },
    methods: {
        getGoodsAmountData() {
            getAmountList().then((res) => {
                if (res.code == 0) {
                    this.topPanelData = res.data
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>
