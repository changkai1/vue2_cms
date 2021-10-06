module.exports = {
    // publicPath: "./",
    // outputDir: "./dist",
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
