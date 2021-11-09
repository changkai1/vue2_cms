<template>
    <div class="statistical-panel">
        <el-card shadow="hover" class="card">
            <div class="header">
                <span>{{ panelData.title }}</span>
                <el-popover placement="top" width="100" trigger="hover" :content="panelData.tips">
                    <i class="el-icon-warning-outline" slot="reference"></i>
                </el-popover>
            </div>
            <div class="content">
                <base-counter-up></base-counter-up>
            </div>
            <div class="footer">
                <span>{{ panelData.subtitle }}</span>
                <base-counter-up></base-counter-up>
            </div>
        </el-card>
    </div>
</template>

<script>
import BaseCounterUp from "@/components/baseCounterUp"
export default {
    name: "statisticalPanel",
    components: {
        BaseCounterUp
    },
    props: {
        panelData: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.statistical-panel {
    .card {
        margin: 0 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        // height: 130px;
        overflow: hidden;
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 38px;
        }
        .content {
            font-size: 26px;
            color: rgba(0, 0, 0, 0.85);
        }
        .footer {
            margin-top: 20px;
            padding-top: 5px;
            height: 38px;
            font-size: 14px;
            border-top: 1px solid #f0f0f0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: rgba(0, 0, 0, 0.85);
            letter-spacing: 1px;
            span {
                margin-right: 5px;
            }
        }
    }
}
</style>
