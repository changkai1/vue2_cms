import dayjs from "dayjs"
// utc时间转化
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)
let utils = {}
// utc时间格式化
utils.formatUtcTime = function (utcTime, format = "YYYY-MM-DD HH:mm:ss") {
    return dayjs.utc(utcTime).utcOffset(8).format(format)
}
export default utils
