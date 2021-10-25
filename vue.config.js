module.exports = {
    publicPath: "./",
    // outputDir: "./dist",
    outputDir: process.env.VUE_APP_BASE_NAME,
    configureWebpack: {
        resolve: {
            alias: {
                components: "@/components"
            }
        }
    },
    devServer: {
        proxy: {
            "^/api": {
                target: "http://152.136.185.210:5000",
                pathRewrite: {
                    "^/api": ""
                },
                changeOrigin: true
            }
        }
    }
}
