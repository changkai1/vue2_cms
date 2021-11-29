<template>
    <div class="base-counter-up">
        <span ref="conterUpRef"></span>
    </div>
</template>

<script>
// http://inorganik.github.io/countUp.js/
import { CountUp } from "countup.js"
export default {
    name: "baseCounterUp",
    props: {
        number: {
            type: Number,
            default: 0
        },
        option: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {
            counteUpOptions: {
                decimalPlaces: 2, // 保留两位
                duration: 2, // 动画时长
                separator: ",", // 千位分割符号
                decimal: ".", // 小数分割
                prefix: "￥", // 前置符号
                suffix: "" // 后置符号
            },
            counterRef: null,
            instance: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.counterRef = this.$refs.conterUpRef
            this.createCounter()
        })
    },
    methods: {
        createCounter() {
            let opts = Object.assign(this.counteUpOptions, this.option)
            this.instance = new CountUp(this.counterRef, this.number, opts)
            this.start()
        },
        start() {
            this.instance.start()
        }
    }
}
</script>

<style lang="scss" scoped></style>
