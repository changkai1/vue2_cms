let localCache = {
    // 存
    setCache(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    },
    // 取
    getCache(key) {
        const value = window.localStorage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
    },
    // 删指定的key
    deleteCache(key) {
        window.localStorage.removeItem(key)
    },
    // 清除全部
    clearCache() {
        window.localStorage.clear()
    }
}
export default localCache
