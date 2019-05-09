const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/scss/_reset.scss";`,
                data: `@import "@/assets/scss/_variables.scss";`,
                data: `@import "@/assets/scss/_mixins.scss";`
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8888'
            }
        }
    },
    outputDir: path.resolve(__dirname, '../public')
};